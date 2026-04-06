# AllSpeak Project — Claude Context

## What is AllSpeak

AllSpeak is a multilingual scripting engine forked from EasyCoder. Where EasyCoder uses English-like syntax, AllSpeak's goal is to let users write scripts in **any human language** — English, French, Japanese, Arabic, etc. — while sharing a single language-neutral runtime.

Scripts use the `.as` extension. The name "AllSpeak" references the Marvel Comics Asgardian ability to communicate in any language.

## Origin

Forked from [EasyCoder](https://github.com/easycoder/easycoder.github.io) on 2026-04-06. The entire EasyCoder codebase was copied and globally renamed:
- `EasyCoder` → `AllSpeak`, `easycoder` → `allspeak`, `ec_` → `as_`, `.ecs` → `.as`

The original EasyCoder repo continues unchanged as the stable English-only product.

## Repository Structure

```
/js/allspeak/      JS runtime source (Core.js, Browser.js, Compile.js, Run.js, etc.)
/js/plugins/       JS plugin modules (ui, svg, gmap, mqtt, etc.)
/dist/             Build output — do not edit directly
/allspeak-py/      Python implementation (not yet adapted for multilingual)
/spec/             Language and plugin contracts
/conformance/      Cross-implementation test suite (.as tests + expected JSON output)
/vendor/           Third-party libraries (showdown, codemirror)
/resources/        Website assets (carried over from EasyCoder, to be pruned)
/codex/            Tutorial IDE (carried over, to be adapted)
/examples/         Demo apps (carried over)
```

## Architecture — The Multilingual Goal

The key architectural challenge is separating **language-neutral runtime** from **language-specific front-ends**.

### What is language-neutral (the engine)
- Runtime execution: `Run.js`, `Value.js`, `Condition.js`, `Compare.js`
- DOM/browser interaction: `Browser.js` (the runtime parts)
- Data handling: `JSON.js`, `REST.js`, `MQTT.js`, `Webson.js`
- Plugin execution logic

### What must become language-specific (the front-ends)
- Keyword definitions and grammar patterns in `Core.js` and `Browser.js`
- The compiler/parser: `Compile.js`
- Error messages
- Plugin keyword definitions

### Design direction
- **Declarative language definitions** — each human language maps its keywords/grammar to the internal command set, likely via JSON or similar
- **Table-driven compilation** — the compiler reads language definitions rather than hardcoding English keywords
- **One runtime, many front-ends** — a French `.as` script and an English `.as` script compile to the same internal representation and run on the same engine

This architecture is **not yet implemented** — the current code is still the English-only EasyCoder engine with names changed. The multilingual layer is the work to be done.

## Two Implementations

| | JS | Python |
|--|--|--|
| Source | `/js/allspeak/` | `/allspeak-py/allspeak/` |
| Build output | `/dist/allspeak.js`, `/dist/allspeak-min.js` | pip package |
| Runtime | Browser | CLI |
| Core files | `Core.js`, `Browser.js`, `Compile.js`, `Run.js`, `Main.js` | `as_core.py`, `as_compiler.py`, `as_program.py` |

The Python implementation has only been renamed, not adapted for multilingual yet. JS is the primary focus.

## Build System

The build script is `./build-allspeak` (shell script). It:
1. Clears `/dist/`
2. Copies `/js/plugins/` to `/dist/plugins/`
3. Fetches vendor assets from CDN if not in `/vendor/`
4. Concatenates all core JS files into `/dist/allspeak.js`
5. Minifies → `/dist/allspeak-min.js`

**Bundle order:** `Core.js` → `Browser.js` → `MarkdownRenderer.js` → `Webson.js` → `JSON.js` → `MQTT.js` → `REST.js` → `Compare.js` → `Condition.js` → `Value.js` → `Run.js` → `Compile.js` → `Main.js` → `AllSpeak.js`

**Never edit files in `/dist/` directly.**

## Versioning

Date-based (e.g. `250824` = 24 Aug 2025). Set in `js/allspeak/AllSpeak.js` line 1.

## Key Conventions

- Scripts are embedded in HTML inside a `<pre id="allspeak-script">` element
- Runtime loaded as `allspeak.js` or `allspeak-min.js`
- Plugins loaded separately from `/dist/plugins/`
- Each plugin follows the contract in `/spec/allspeak-plugin-contract.md`

## Commit Style

Date-based messages (e.g. `26040601`, `26040602`). Follow this pattern unless specified otherwise.
