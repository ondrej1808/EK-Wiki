# Agent instructions — Manual LaTeX reformat for `v5`

Purpose
- Manually reformat every question and answer in `json/szz_ai_per_subject/v5` so that all mathematical formulas are in LaTeX mode and normal prose remains plain text (or wrapped with `\\text{}` inside math when needed).
- After edits, produce a merged `v5/SZZ.json`.

Prerequisites
- Python 3 available and ability to run scripts in the repository root.
- Files are in `json/szz_ai_per_subject/v5`.

High-level workflow (interactive agent)
1. Load the list of `.json` files from `json/szz_ai_per_subject/v5` in alphabetical/order defined by `merge_json.py`.
2. For each file (skip none unless explicitly instructed), open and iterate `questions` array in order.
3. For each question object:
   - Display: filename, question index, `question` string, and each `answer_parts[].text` (show original raw string).
   - Propose a suggested edit (see rules below) and show a 3-line diff preview.
   - Prompt operator (automated agent acting interactively) to: `accept` / `edit` (open inline editor prompt) / `skip` / `quit`.
   - If `accept`, apply suggested edit and continue.
   - If `edit`, let the operator type the exact replacement text (support multi-line). Validate JSON-escaping on save.
   - If `skip`, leave original.
   - If `quit`, save progress so far and exit cleanly.
4. After finishing all files, run the merge step to produce `v5/SZZ.json`.

Rules for suggested edits (automated heuristics that agent should present, operator must confirm):
- If a substring contains obvious LaTeX commands (`\\\\frac`, `\\\\sum`, `\\\\int`, `\\\\sqrt`, `\\\\alpha` etc.), or symbol patterns (superscripts `^`, subscripts `_`, Greek letters, integral/sum signs, relational arrows), ensure that substring is inside `$...$`.
- Do NOT move normal prose into math mode. If a sentence mixes math with text, split it: keep human-readable words outside math, place only math expressions inside `$`.
  Example: `Reálná funkce FX(x) = P(X ≤ x) definovaná pro x ∈ R.` → `Reálná funkce $F_X(x)=P(X\\le x)$ definovaná pro $x\\in\\mathbb{R}$.`
- Preserve spaces in normal prose. Remember: math mode collapses spaces. If you need text inside math, use `\\text{...}`. Prefer to keep natural language outside `$...$` unless short symbols are inserted inline.
  Example: incorrect: `$Reálná funkce FX(x) = ...$` — this makes spacing wrong. Better: `Reálná funkce $F_X(x)=P(X\\le x)$ je ...` or `Reálná funkce $F_X(x)=P(X\\le x)$.`
- For equations that span a whole line and are display-level, the agent should still wrap with single dollar signs per user request (they requested `$`), but if multi-line display is needed, use `$$...$$` only when operator chooses to. Default: inline `$...$`.
- Escape special JSON characters when saving (agent script should use `json.dump(..., ensure_ascii=False)` so unicode is preserved).
- Maintain existing TeX like `$` blocks — do not double-wrap.

Examples (before → after):
- Before: `Reálná funkce FX(x) = P(X ≤ x) definovaná pro x ∈ R.`
  Suggested: `Reálná funkce $F_X(x)=P(X\\le x)$ definovaná pro $x\\in\\mathbb{R}$.`
- Before: `var(X) = E(X²) - (EX)² = σ²`
  Suggested: `$\\mathrm{var}(X)=E(X^2)-(EX)^2=\\sigma^2$` or if embedded in sentence: `Druhý centrální moment je $\\mathrm{var}(X)=E(X^2)-(EX)^2=\\sigma^2$.`
- Before: `Matice n×n, kde na diagonále jsou variance ... cov(Xj, Xk) = E[(Xj - EXj)(Xk - EXk)].`
  Suggested: `Matice $n\\times n$, kde na diagonále jsou variance jednotlivých veličin a mimo diagonálu platí $\\operatorname{cov}(X_j,X_k)=E[(X_j-EX_j)(X_k-EX_k)]$.`

Implementation hints for the interactive agent
- Provide a minimal text UI: show original, suggested, and prompt. Keep the prompt keyboard-friendly (`a` accept, `e` edit, `s` skip, `q` quit).
- Use a robust diff preview (Python `difflib.unified_diff`) limited to 3 lines around the change.
- When operator chooses `edit`, open a small multi-line input (read until a dedicated delimiter line like `.` on its own) or spawn the user's editor via `$EDITOR`.
- Validate that after edit there are balanced `$` and no nested `$...$...$`. Warn if suspicious.
- Keep an incremental backup per-file (e.g., write `filename.json.bak` before first change).

Merge step (automated at the end)
1. After operator finishes manual pass, run:

```powershell
Set-Location 'json/szz_ai_per_subject/v5'
python merge_json.py
```

2. The script will create `v5/SZZ.json`.

Final checks
- Run a small validator that scans `v5` for lines that still contain math-like tokens outside `$` and produce a report for manual review.
- Optional: run spot-checks for the 10 most-changed files.

Notes
- Prefer clarity over minimal edits: if a sentence reads poorly inside math, move the natural language outside and keep math only for symbolic parts.
- Agent must not change file structure except `title`, `question`, and `answer_parts[].text` fields.

If you want, I can also implement the interactive script now at `json/szz_ai_per_subject/v5/manual_reformat.py` so the agent can run it immediately.
