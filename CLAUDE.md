# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static Czech study flashcard + wiki application ("Kartičky / EK Wiki") for state exam (SZZ) prep. Served as **GitHub Pages** (static, no server). Local dev uses FastAPI/Uvicorn via `start_dev.ps1` (Windows) or `cards.service` (Ubuntu).

## Development

**Local dev (Windows):** `.\start_dev.ps1` — creates `.venv`, installs deps, starts FastAPI/Uvicorn on `http://localhost:8000` with `--reload`.

**Production (Ubuntu systemd):** `sudo cp cards.service /etc/systemd/system/ && sudo systemctl enable --now cards`. Runs on port 80.

**Ubuntu port 80 without root:** `sudo setcap 'cap_net_bind_service=+ep' $(readlink -f $(which uvicorn))`

**Install deps:** `pip install -r requirements.txt`

**GitHub Pages:** Repo root is the Pages source. `.nojekyll` disables Jekyll. Deploy workflow: `.github/workflows/deploy-pages.yml`.

## Pages

| File | Role |
|------|------|
| `index.html` | Hub landing page with links to all tools |
| `cards.html` + `script.js` | Main flashcard study mode |
| `cards_creator.html` + `cards_creator.js` | Card editor (CRUD, ZIP export) |
| `wiki.html` + `wiki.js` | SZZ markdown wiki with rendered LaTeX + TikZ |
| `waveguide_simulator.html` | Interactive slab waveguide ray simulator |
| `wheel-of-fortune.html` | Random question picker |
| `zkratky.html` | Abbreviations reference |

## Wiki Architecture (`wiki.html` / `wiki.js`)

Fully static, GitHub Pages compatible. No server needed.

### Content sources

1. **`SZZ/` submodule** (`https://github.com/SirWalkerCZ/SZZ.git`) — Obsidian vault with ~20 detailed markdown notes. After clone: `git submodule update --init`. Files referenced by a **hardcoded index** in `wiki.js` (`SZZ_NOTES` array).

2. **`assets/questions/*.md`** — pre-compiled question summaries (one per subject code). Index loaded at runtime from `assets/question_list.md` (parses `### Title (CODE)` lines).

### Rendering pipeline

For each markdown file fetched, `wiki.js` applies in order:

1. **Obsidian pre-processing** — strips `[[wikilinks]]`, converts `> [!callout]` to bold blockquotes
2. **Math extraction** — replaces `$$...$$`, `$...$`, `\[...\]`, `\(...\)` with `\x00MN\x00` placeholders (protects them from marked)
3. **marked.js** — standard GitHub-flavoured markdown → HTML
4. **KaTeX restore** — replaces placeholders with `katex.renderToString()` output
5. **TikZ conversion** — converts `<pre><code class="language-tikz">` → `<script type="text/tikz">` for tikzjax
6. Insert into DOM → tikzjax MutationObserver picks up script elements and renders SVG

### CDN dependencies (wiki only)

- `katex@0.16.9` + auto-render (jsdelivr)
- `marked@11` (jsdelivr)
- `tikzjax.com/v1/tikzjax.js` (~2 MB WebAssembly, loads deferred)

### URL routing

Hash-based: `#doc=szz%3ASZZ%2FELD%2F...md` or `#doc=okruh%3AB2B17ELD`. `encodePath()` URL-encodes each path segment (SZZ filenames contain spaces).

## Flashcard Data Flow

- All question data lives in `json/` as JSON files
- `script.js` loads JSON via `fetch()` or file upload (FileReader API)
- State persisted to `localStorage` keyed by subject (`tsi_save_` + subjectKey)
- Inter-page handoff (creator → viewer) uses `sessionStorage` key `cards_creator_handoff_v1`
- Creator autosaves drafts to `localStorage` key `cards_creator_draft_v1`

### JSON Question Schema

```json
{
  "id": 1,
  "type": "open" | "closed",
  "category": "string",
  "subsetPath": ["Subject", "Topic", "Subtopic"],
  "question": "string (supports LaTeX)",
  "answer_parts": [{ "title": "optional", "text": "string", "imageSrc": null | "figs/file.png" }],
  "options": ["A", "B", "C"],
  "correctIndex": 0,
  "explanation": "optional string"
}
```

`subsetPath[0]` is the subject filter key. `answer_parts` for open questions; `options`/`correctIndex`/`explanation` for closed.

### Image Handling

Images stored as relative paths (`figs/abc.png`). `server.py` handles `POST /upload_image` — LAN/VPN IPs only (see `WRITABLE_PREFIXES`). `GET /api/writable` tells creator JS whether uploads are allowed.

**Migration:** `python tools/migrate_base64_images.py json/szz-open-micro.json --figs-dir figs [--dry-run]`

**ZIP export:** "Export ZIP" in creator bundles JSON + referenced images.

### Key JS Patterns (cards)

- `encodeSubsetPath()` / `decodeSubsetPath()` use `||>` as separator
- Cards have a non-enumerable `__creatorId` property (`attachCardId()`) for identity tracking
- KaTeX 0.16.9, JSZip 3.10.1 loaded from CDN
- Creator card list: collapsible subject tree (`#listTree`). Keyboard: arrows navigate, left/right collapse/expand, Enter edits. Search debounced 150ms.

## Subject Data Files

`json/szz_ai_per_subject/v5/` — per-subject JSON (ELD, KANA, STP, SZZ). Master combined: `json/szz-open-micro.json`. AI generation guidelines: `AI_JSON_QUESTION_GUIDELINE.md`.

## Server (Ubuntu, user `greg`)

- Web root: `~/WEB_CARDS`
- FastAPI/Uvicorn serves everything (no nginx)
- `sudo chown -R greg:greg ~/WEB_CARDS && chmod 775 ~/WEB_CARDS/figs`
- ngrok tunnels port 80 publicly (read-only); LAN/VPN enables image uploads
