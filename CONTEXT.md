# Portfolio Workshop — Session Context

> **Last updated:** 2026-04-04
> **Repo:** https://github.com/looperworks/portfolio-workshop
> **Local path:** /Users/lobestory/Projects/portfolio-guide/
> **Live site:** https://thresholdarch.com/portfolio-workshop
> **Deploy:** GitHub Actions → GitHub Pages (auto-deploy on push to main)

---

## What This Is

A React (Vite) single-page app for an architecture portfolio course at Kent State University. All content lives in one file: `src/App.jsx` (~1637 lines). No backend, no CMS — modules, diagrams, case studies, and components are all inline.

---

## Architecture

### PARTS → Module Ordering

```jsx
const PARTS = {
  part1: { title: "Narrative", modules: [1, 2, 3, 4, 5, 7] },
  part2: { title: "Grid", modules: [8, 9, 16, 14, 15] },
  part3: { title: "Production", modules: [11, 10, 12, 13] },
};
```

`MODULE_POSITION` is computed dynamically from PARTS order, so display numbers (01–15) differ from internal IDs.

### Module ID → Display Position → Title

| ID | Display | Title |
|----|---------|-------|
| 1 | 01 | Portfolio as Argument |
| 2 | 02 | Position and Statement |
| 3 | 03 | Statement to Outline |
| 4 | 04 | The Narrative Arc |
| 5 | 05 | Image Types as Evidence |
| 7 | 06 | Storyboarding the Spreads |
| 8 | 07 | Grid Systems |
| 9 | 08 | Building the Grid: Concepts |
| 16 | 09 | Building the Grid: Setup |
| 14 | 10 | Spread Composition |
| 15 | 11 | Variation and Pacing |
| 11 | 12 | Cover and Table of Contents |
| 10 | 13 | Typographic Systems |
| 12 | 14 | Color and Tonal Unity |
| 13 | 15 | The Self-Editing Audit |

### Case Studies

Case studies use string IDs (`"casestudy"`, `"casestudy2"`) — NOT in the PARTS array. They appear as italic nav items after their respective parts.

- **Case Study 1: Erosion** — after Part I. Harvard GSD Alpine Museum portfolio (5 spreads).
- **Case Study 2: Grid Systems in Practice** — after Part II. Two-project portfolio: Generative Housing + Flexible Framework (12 spreads).

Routes: `#/casestudy`, `#/casestudy2`

### Key Data Structures

- **`MODULES[]`** — Array of `{ id, title, part, overview (prose), keyInsight }`.
- **`CASE_STUDY`** / **`CASE_STUDY_2`** — Same shape but with string IDs.
- **`DIAGRAM_MAP{}`** — Keyed by module ID (number or string). Each entry is an array of `{ image?, component?, title, alt?, caption? }`.
- **`DiagramSlideshow`** component handles both `{ image: "path" }` and `{ component: FunctionRef }` formats.
- **`InteractiveChecklist`** — Renders 5-category, 32-item checkbox widget on Module 13's page.

### Design Tokens

```jsx
const T = {
  navy: "#222", sans: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  border: "#e8e8e8", accent: "#222", coral: "#888", gold: "#888",
  steel: "#5a7a8a", // ... etc
};
```

Monochrome palette — navy/gray/white. No color decoration.

---

## Image Assets

- **`public/images/class-pdf/`** — 34 files. Case Study 1 spreads (5 JPGs), Case Study 2 spreads (12 JPGs), class slides (PNGs).
- **`public/images/*.svg`** — 23 SVGs. Grid diagrams, setup steps, glossary, workspace, shortcuts.
- **`public/images/*.png`** — 8 PNGs. Facade grid, column grid, portfolio example.
- **Cover/TOC type images** — `type01-pure-minimal.jpeg` through `type07-abstract-line.jpeg`, `toc01-*.png` through `toc06-*.png`.

### Known Issue: Black Spine Lines

All 12 Case Study 2 spread JPGs have a ~3-5px black line on the left edge from PDF export. Not CSS — baked into the images. Two fix options discussed but not yet executed:
1. Re-export from InDesign without facing pages
2. Programmatic crop (ImageMagick or Python PIL)

---

## Inline SVG Diagram Components (12 total — all wired into DIAGRAM_MAP)

- `DiagramCompression` — The compression exercise (Module 2)
- `DiagramCompressionWorked` — Worked example: Alpine Museum → Erosion (Module 2)
- `DiagramWeakVsStrong` — Weak vs strong statement comparison (Module 2)
- `DiagramTypography` — Typography categories (Module 10)
- `DiagramSizeHierarchy` — Type size hierarchy: 24–48pt / 14–20pt / 9–11pt / 7–8pt (Module 10)
- `Diagram12Point` — Document setup: 12-point system (Module 16)
- `DiagramLayerArchitecture` — InDesign layer architecture (Module 16)
- `DiagramParentPages` — Parent page architecture (Module 16)
- `DiagramColorPalettes` — Three palette families (Module 12)
- `DiagramCoverTypes` — Seven cover typologies (Module 11)
- `DiagramChecklist` — Five-category audit framework (Module 13)
- `DiagramExportStandards` — File export standards (Module 13)

13 orphaned diagram components were removed in Session 3 (~404 lines of dead code): DiagramNarrativeArc, DiagramChronVsNarrative, DiagramFourImageTypes, DiagramImageMapping, DiagramNarrativeFailures, DiagramPortfolioAnatomy, DiagramTwoSpeed, DiagramAudienceLens, DiagramTwoTrack, DiagramSequenceStructures, DiagramInitialsAndFinals, DiagramFiveNarrativeElements, DiagramNarrativeConstruction.

---

## Taxonomy Systems (Two Distinct Frameworks)

1. **Keyword categories (Module 3 — Statement to Outline):** site / problem / design-move / result. Used for extracting requirements from the position statement.
2. **Image types (Module 5 — Image Types as Evidence):** concept / context / process / outcome. Used for classifying what role each drawing plays.

Module 5 contains a bridging sentence explaining how the two systems are complementary: keywords generate requirements, image types classify what you produce.

---

## Completed Work (Chronological)

### Session 1 (Early)
- Split "Building the Grid" into two modules: Concepts (ID 9) + Setup (ID 16)
- Created SVG diagrams for grid modules (01–20 series)
- Replaced student name with "Case Study 2" across Part 2

### Session 2
- Added all 12 Case Study 2 spread images to Module 8
- Created Case Study 2 page with full grid-systems analysis prose
- Renamed case studies: "Case Study 1: Erosion" / "Case Study 2: Grid Systems in Practice"
- Updated Module 14 (Spread Composition): 4 diagrams mapped 1:1 to four composition decisions
- Rewrote Module 15 (Variation and Pacing): fixed AI language, matched diagrams to prose
- Full audit of Part 3 modules (11, 10, 12, 13): captions, prose quality, diagram alignment
- Updated Module 13 checklist to match Class 9 Self-Assessment PDF (5 categories, 32 items)
- Renamed Module 11: "Cover and Information Architecture" → "Cover and Table of Contents"
- Reordered Part 3: `[11, 10, 12, 13]` (Cover/TOC before Typography)

### Session 3
- **AI language sweep** across Part 1 (Modules 1–5, 7): only fix was Module 3's "generative engine" → "blueprint for the images the portfolio must include"
- **Content audit** (architecture professor review):
  - Fixed DiagramChecklist: 4-level → 5-category audit framework (added Typography category)
  - Aligned Module 10 type sizes across prose + DiagramSizeHierarchy + diagram captions (7–8pt captions, not 8–10pt)
  - Fixed Module 7 timing: "ten to fifteen minutes" → "five to fifteen minutes" (matched Module 1)
  - Fixed Module 15 cross-reference: "Module 14" → "The Spread Composition module"
  - Removed 13 orphaned diagram components (~404 lines of dead code)
- **Instructional design audit** (8 recommendations implemented):
  - Resolved taxonomy collision: renamed Module 3 categories from context/conflict/intervention/outcome to site/problem/design-move/result
  - Trimmed Module 1 cognitive overload: cut premature anatomy/image-types preview
  - Added Module 5 bridging sentence linking keyword categories to image types
  - Removed Module 9/16 spec duplication (specs now only in Module 16)
  - Added Part II deliverable statement to Module 8 opening
  - Added "Try this now" activity prompts to 9 modules (all modules now have exercises)
  - Added reflective questions to Case Study 1 diagram captions
- **Consistency and coherence check** (final pass):
  - Fixed Module 10 cross-reference: "the previous module" → "established in Part II"
  - Fixed Module 3 residual old terminology: "context to problem to response" → "site to problem to design-move to result"
  - Verified: Red Thread terminology consistent across modules 2, 11, 12
  - Verified: concept sentence / graphic outline terminology consistent
  - Verified: Case Study 1 prose headers match module titles
  - Verified: six-column grid references consistent across modules 8, 9, 14, 15, 16
  - Verified: DiagramSizeHierarchy component sizes match Module 10 prose exactly
  - Verified: Module 9 correctly defers grid specs to Module 16
  - Note: Case Study 2 spread images reused across modules with different captions — intentional (each module highlights different teaching point)

### Git Commits (Session 3)
- `1419c1f` — Part 1 AI language sweep: replace 'generative engine' in Module 3
- `cd734ef` — Add CONTEXT.md for session continuity
- `4e149c6` — Audit fixes: checklist diagram, type sizes, timing, cross-refs, dead code
- `1eaa207` — Instructional design audit: taxonomies, scaffolding, active learning
- `a299a9c` — Consistency fixes: cross-reference and terminology alignment

---

## Writing Standards

- **Voice:** Direct instructor addressing second-year architecture students. "You" is implicit.
- **AI language to avoid:** "generative engine," "transformative," "delve," "crucial," "tapestry," "multifaceted," "nuanced," "seamlessly," "it's important to note," "moreover/furthermore."
- **Preferred patterns:** Active voice. Concrete references to specific spreads/images. Short declarative sentences. Bold section headers within prose for scannability.
- **Each module's prose should:** Reference case study spreads by number. Tie diagrams to specific claims. End with actionable instruction.
- **Key insight:** One sentence. Tight. Memorable. Not a summary — a provocation.
- **Activity prompts:** Every module now has a "Try this now" exercise. Format: bold label, concrete task, specific deliverable.

---

## Pending / Future Work

All three items below were completed in Session 4 (2026-07-26). See that section for detail. Nothing outstanding from this list currently.

---

### Session 4 (2026-07-26)

- **Black spine line fix**: only 4 of the 12 Case Study 2 spread images actually had the defect (spreads 3, 5, 6, 9 — a 1-2px line, not the ~3-5px originally guessed). Measured pixel-by-pixel with PIL, cropped 3px from the left edge of just those 4 files. The other 8 were already clean.
- **Accessibility audit**: fixed real WCAG issues found via code read + independent agent audit:
  - `index.html` had malformed/duplicated closing tags after `</html>` — cleaned up.
  - Landing-page module list, case study/exercise links, and "Diagram: ..." links were `<div onClick>`/`<span onClick>` with no keyboard support — converted to real `<a href="#/...">` (matches the existing `renderText()` link pattern and the global hash-click interceptor already in the code).
  - Added `<main id="main-content">` landmarks and a "Skip to content" link to all 7 page views (landing, module detail, case study 1 & 2, exercise 1 & 2, about).
  - Checklist heading was `<h3>` under an `<h1>` with no `<h2>` — changed to `<h2>`; Part I/II/III labels on the landing page changed from `<div>` to `<h2>`.
  - 11 inline SVG diagram components got `aria-hidden="true"` (each already has a visible title/caption in `DiagramSlideshow`, so the SVG is redundant to screen readers — 2 more diagram components, `DiagramLayerArchitecture` and `DiagramParentPages`, are dead code, never wired into `DIAGRAM_MAP`, left untouched).
  - Removed `outline: "none"` from the Exercise form's text inputs/select with no replacement — added a site-wide `:focus-visible` outline rule in `index.css` instead (steel blue, matches `T.steel`).
  - Color tokens `T.textLight`/`T.textMuted`/`T.textFaint` were `#888`/`#aaa`/`#ccc` (3.5:1 / 2.3:1 / 1.6:1 against white — all fail WCAG AA). Darkened to `#5f5f5f`/`#6b6b6b`/`#757575` (6.4:1 / 5.3:1 / 4.6:1), preserving the relative hierarchy.
  - Added a per-route `document.title` update (was static for the whole SPA).
- **Mobile responsiveness**: fixed at 375px viewport:
  - All `40px` horizontal padding (headers/footers/content) replaced with `clamp(16px, 6vw, 40px)` — was overflowing on narrow screens.
  - Header back-button + module-number-pills row was wrapping to two lines and colliding (e.g. "MODULE 03" running into "06" with no gap) — added `whiteSpace: nowrap`/`flexShrink: 0` to the back button, `minWidth: 0` to the pills scroller, and an explicit `gap: 12` between them.
  - The diagram gallery/lightbox (`DiagramSlideshow`) used `85vh`-wide cards and `calc(50vw - 240px)` centering padding — both assume desktop landscape and overflowed badly on mobile portrait (card ran off-screen, caption text got clipped). Changed to `min(85vh, 88vw)` and `max(16px, calc(50vw - 240px))`, and let the diagram title wrap instead of `nowrap`.
  - Verified: landing, module detail, case study 1 & 2, exercise 1 & 2, about, and the diagram gallery all render correctly at 375px and at desktop width, no regressions.

Known non-blocking follow-up not done this session: decorative SVG accent colors (`T.coral`, `T.gold` — also `#888`) still fail contrast, but they're inside `aria-hidden` diagrams that already have a full-text caption alongside — lower priority than the main token fix.

---

## Git Workflow

All edits happen on the local repo at `/Users/lobestory/Projects/portfolio-guide/`. Use Desktop Commander (MCP) for file reads/edits. Push to `main` triggers GitHub Actions deploy to GitHub Pages.

**Important:** The Cowork sandbox filesystem (`/sessions/...`) is separate from the local repo. Always read/edit via Desktop Commander on the actual path, never rely on sandbox copies.

Latest commit: `a299a9c` (Consistency fixes: cross-reference and terminology alignment)
