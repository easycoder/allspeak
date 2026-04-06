# AllSpeak Shared Specification

This folder defines the implementation-agnostic AllSpeak language contract.

Goals:
- Keep one canonical description of language behavior.
- Let multiple runtimes (browser JS, Python CLI) target the same behavior.
- Drive conformance tests from spec statements.

Structure:
- `allspeak-language-contract.md`: normative behavior and compatibility policy.
- `allspeak-plugin-contract.md`: shared plugin/domain interface contract and JS/Python mapping.
- `allspeak-versioning-policy.md`: shared versioning and release-note rules across runtimes.

Versioning:
- Spec versions use `MAJOR.MINOR`.
- Runtimes declare which spec version they implement.
