# Workspace Instructions

This workspace is a static collection of HTML simulation pages. Treat the shared kit as the source of truth:

- [sim-kit.js](sim-kit.js) contains the shared canvas, control, and rendering helpers.
- [sim-kit.css](sim-kit.css) contains the shared visual system.
- Individual `*.html` files are standalone pages and usually use relative links to sibling pages.

When editing or adding content, keep these rules in mind:

- Prefer the existing page structure and shared `SK` helpers over adding new frameworks or duplicated logic.
- Keep links relative and local to the workspace.
- Use the wiki subject pages as the canonical navigation targets.
- For simulation pages, link to the wiki subject page instead of creating a separate subject page under simulation.
- For the Gauss-law topic, use [gaussova_veta_simulace.html](gaussova_veta_simulace.html) as the linking anchor when adding references from related derivations or examples.
- Avoid duplicating topic explanations across multiple simulation files when a wiki subject page already covers the concept.

Editing guidance:

- Preserve filenames and existing relative links unless a rename is explicitly required.
- Update any sibling links if a file moves.
- Keep changes minimal and consistent with the current plain-HTML style.
- Avoid introducing build steps, new dependencies, or extra abstraction layers unless the user asks for them.