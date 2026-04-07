"""
AllSpeak Language Pack Loader (Python)

Loads a language pack JSON file and provides lookup methods
for translating between the active language and canonical English keywords.
Mirrors the JS Language.js module.
"""

import json
import os

class Language:

    def __init__(self):
        self.pack = None
        self._reverse_words = None
        self._keyword_to_canonical = None

    def init(self, pack_data):
        """Initialize with a language pack dictionary."""
        self.pack = pack_data
        self._reverse_words = None
        self._keyword_to_canonical = None
        self._build_reverse_words()
        self._build_keyword_map()

    def load_file(self, path):
        """Load a language pack from a JSON file path."""
        with open(path, 'r', encoding='utf-8') as f:
            self.init(json.load(f))

    def load_by_name(self, name):
        """Load a language pack by language code (e.g. 'en', 'it').
        Searches the languages/ directory relative to the project root."""
        # Search in several likely locations
        candidates = [
            os.path.join(os.path.dirname(__file__), '..', '..', 'languages', f'{name}.json'),
            os.path.join(os.path.dirname(__file__), 'languages', f'{name}.json'),
            os.path.join('languages', f'{name}.json'),
        ]
        for path in candidates:
            if os.path.exists(path):
                self.load_file(path)
                return True
        return False

    def _build_reverse_words(self):
        """Build reverse lookup: translated word -> canonical name."""
        self._reverse_words = {}
        if self.pack and 'words' in self.pack:
            for canonical, translated in self.pack['words'].items():
                # Support pipe-separated multi-forms (e.g. "il|lo|la|gli|le")
                for form in translated.split('|'):
                    self._reverse_words[form] = canonical

    def _build_keyword_map(self):
        """Build reverse lookup: translated opcode keyword -> canonical keyword."""
        self._keyword_to_canonical = {}
        if self.pack and 'opcodes' in self.pack:
            for opcode, entry in self.pack['opcodes'].items():
                for kw in entry['keyword'].split('|'):
                    if kw not in self._keyword_to_canonical:
                        self._keyword_to_canonical[kw] = kw  # store original for now

    def word(self, canonical):
        """Look up the primary translated form of a canonical word.
        e.g. word('into') -> 'in' (Italian) or 'into' (English)"""
        if not self.pack or 'words' not in self.pack:
            return canonical
        entry = self.pack['words'].get(canonical, canonical)
        # Return first form if pipe-separated
        return entry.split('|')[0]

    def word_forms(self, canonical):
        """Return all translated forms for a canonical word.
        e.g. word_forms('the') -> ['il', 'lo', 'la', 'gli', 'le'] (Italian)"""
        if not self.pack or 'words' not in self.pack:
            return [canonical]
        entry = self.pack['words'].get(canonical, canonical)
        return entry.split('|')

    def matches_word(self, token, canonical):
        """Check if a token matches any form of a canonical word."""
        return token in self.word_forms(canonical)

    def reverse_word(self, token):
        """Reverse lookup: given a word in the active language, return its canonical name.
        e.g. reverse_word('dando') -> 'giving' (from Italian)"""
        if self._reverse_words is None:
            self._build_reverse_words()
        return self._reverse_words.get(token, token)

    def diagnostic(self, key, params=None):
        """Get a localized diagnostic message with placeholder substitution."""
        fallbacks = {
            'unknownCommand': "I don't understand '{token}' at line {line}.",
            'undeclaredVariable': "Variable '{name}' has not been declared.",
            'unexpectedToken': "Expected '{expected}' but got '{actual}' at line {line}.",
            'syntaxError': "Syntax error at line {line}: {detail}.",
        }
        msg = None
        if self.pack and 'diagnostics' in self.pack:
            msg = self.pack['diagnostics'].get(key)
        if not msg:
            msg = fallbacks.get(key, key)
        if params:
            for k, v in params.items():
                msg = msg.replace(f'{{{k}}}', str(v))
        return msg


# Global singleton instance
language = Language()
