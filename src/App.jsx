import { useState, useEffect, useRef } from "react";

const MODULES = [
  {
    id: 1,
    title: "Why Your Portfolio Matters",
    overview: `A portfolio is not a binder of coursework or a personal design journal. It is a curatorial act and a communication tool. Every decision you make about what to include, how to sequence it, and where to place it on the page is an act of design. The portfolio is not separate from your work. It is your work, reframed for an audience.

Before you walk into a review, an interview, or a scholarship committee, your portfolio has already made its case. Reviewers often spend thirty seconds on an initial scan. In that window, the sequencing of images, the hierarchy of information, and the clarity of layout have either earned deeper attention or lost it.

The best portfolios tell a story about how you design, not just what you designed. Students who treat the portfolio as a container produce binders. Students who treat it as an argument produce tools that open doors.`,
    keyInsight: `"A portfolio is not an archive. It is an argument."`,
    diagrams: [
      { label: "Weak vs. Strong Portfolio Comparison", desc: "Chronological dump with equal visual weight vs. 3–5 projects showing growth and range" },
      { label: "What a Portfolio Demonstrates", desc: "Design thinking · Technical ability · Visual communication · Research depth · Evidence of growth" },
    ],
  },
  {
    id: 2,
    title: "Audience & Strategic Tailoring",
    overview: `Your portfolio operates on two tracks simultaneously. At skim speed — thirty seconds — the image hierarchy, cover, and sequencing must tell a story. At read speed — two to five minutes — the project statements, captions, and visual details must deepen that story without contradicting it.

Portfolio content should shift based on audience type. An academic reviewer prioritizes sketches, diagrams, and dead ends that reveal process depth. A professional reviewer at a large firm leads with resolved, publication-quality work and technical proficiency. A boutique firm values design sensibility and philosophical alignment. Knowing these roles is the difference between a page that documents and a page that argues.`,
    keyInsight: `"Strong portfolios select images based on what each one contributes to the argument."`,
    diagrams: [
      { label: "Audience Matrix", desc: "Undergrad Admissions → Creative potential | Grad School → Research agenda | Boutique Firms → Philosophy alignment | Corporate Firms → Technical proficiency" },
      { label: "Page Length Guidelines", desc: "Students: 15–25 pages | Internship: 8–12 | Graduate school: 20–30 | Professional sample: 2–5" },
    ],
  },
  {
    id: 3,
    title: "The Narrative Arc",
    overview: `Film and theatre have long understood that audiences process information through structure. The three-act framework — setup, confrontation, synthesis — is not a formula. It is a pattern of expectations that audiences already carry. Portfolios that follow this pattern feel clear. Portfolios that ignore it feel scattered, regardless of the quality of the work.

Setup: The opening spread establishes context — who you are as a designer, what territory your work occupies, and what questions drive it. This is the overture. A strong setup creates a lens through which a reviewer reads everything that follows.

Confrontation: The middle projects develop your case. Each one should introduce a new dimension of your thinking, not simply repeat the same strength. Repetition without development signals a limited range.

Synthesis: The closing projects demonstrate convergence. Technical resolution, professional awareness, and design maturity come together. A reviewer should leave the final spread with a sense of direction, not just skill.`,
    keyInsight: `"The narrative arc determines what a viewer encounters and in what order. The grid determines how each encounter is constructed on the page."`,
    diagrams: [
      { label: "Three-Act Narrative Arc Diagram", desc: "Act I: Setup → Act II: Confrontation (Peak Complexity) → Act III: Synthesis (Resolution)" },
      { label: "Chronological Assembly vs. Narrative Composition", desc: "Studio order + generic descriptions vs. argument-ordered + position-driven statements with visible Red Thread" },
    ],
  },
  {
    id: 4,
    title: "Four Image Types",
    overview: `Every image in a portfolio performs one of four roles. Knowing these roles is the difference between a page that documents and a page that argues. Strong portfolios select images based on what each one contributes to the argument.

Concept: The diagram, collage, or sketch that captures the governing idea. It tells a reviewer what you were thinking before you started drawing plans. Concept images belong early in a project sequence.

Process: Iterations, massing studies, model photographs. Process images are evidence of thinking, not tested, reconsidered, and refined. They show that you explored, struggled, and evolved.

Outcome: The final rendering, the technical drawing, the detail section. Outcome images prove feasibility and demonstrate professional fluency. Without them, even brilliant concepts remain untested.

Context: Site photographs, analytical maps, precedent studies. Context images establish the conditions that generated the project. They answer: why does this project exist in this place?`,
    keyInsight: `"Sequence: Concept first, Outcome last."`,
    diagrams: [
      { label: "Four Image Types Table", desc: "Concept → Anchors idea | Process → Shows refinement | Outcome → Proves resolution | Context → Grounds work" },
      { label: "Image Type Mapping Across Spreads", desc: "How each spread pairs image types to build the narrative argument across a project" },
    ],
  },
  {
    id: 5,
    title: "The Initials-and-Finals Principle",
    overview: `Place your strongest image first and your most resonant image last. The first image earns attention. The last image determines what a reviewer remembers. If the first image is weak, the reviewer may not reach the strong work on page twelve. If the last image is an afterthought, the overall impression deflates.

Most portfolio problems are not problems of skill. They are problems of structure. Three patterns account for nearly every narrative failure in student portfolios:

The Beautiful Mute: Stunning images, no argument. Every spread looks accomplished, but the portfolio as a whole says nothing about what the designer thinks. Beauty without argument is decoration.

The Buried Lede: The strongest project appears on page twelve. The first project is the earliest, weakest studio exercise. The sequencing has buried the most compelling evidence. Lead with strength, not with history.

The Greatest Hits: Every project is strong in isolation, but the collection has no throughline. The portfolio reads like a playlist on shuffle — individually enjoyable, collectively aimless. A throughline transforms a collection into a case.`,
    keyInsight: `"The question is not whether your work is good. The question is whether your portfolio makes a case."`,
    diagrams: [
      { label: "Diagnosing Narrative Failure", desc: "Beautiful Mute: beauty without argument | Buried Lede: strong work hidden at back | Greatest Hits: strong parts, no throughline" },
      { label: "The Initials-and-Finals Sequence", desc: "Strongest image opens → builds complexity → most resonant image closes" },
    ],
  },
  {
    id: 6,
    title: "Finding the Red Thread",
    overview: `The Red Thread is the single organizing idea that connects all your projects into one argument. It is not a style. It is not a medium. It is a design position — a recurring question, preoccupation, or methodology that surfaces across different projects, scales, and contexts.

The Compression Exercise uses progressive compression to move from description to position:

Step 1 — One Paragraph: Write a project statement of four to six sentences. Cover what you explored, what problem or condition you responded to, what method or process you used, and what you discovered or resolved. Describe the thinking.

Step 2 — One Sentence: Compress that paragraph into a single sentence. What survives? A weak sentence describes. A strong sentence declares.

Step 3 — One Word: Compress the sentence into a single word. Threshold. Tension. Porosity. Absence. Erosion. The word is not a label — it is a lens. If you cannot find it, the project may not yet have a clear position.

Step 4 — The Thread Test: Repeat Steps 1–3 for every project. Write the core words side by side. When the same word keeps surfacing, you have found your Red Thread.`,
    keyInsight: `"If the word is the same across three or more projects, the portfolio has a position. If it scatters, it needs one."`,
    diagrams: [
      { label: "The Compression Exercise Diagram", desc: "Paragraph → Sentence → Word → Red Thread — progressive compression from overview to position" },
      { label: "Red Thread Worksheet", desc: "Project 1 word ___ | Project 2 word ___ | Project 3 word ___ | Cluster/pattern ___ | Red Thread ___" },
    ],
  },
  {
    id: 7,
    title: "Writing the Project Statement",
    overview: `Once you have the Red Thread, you can write with precision. The architecture statement is one paragraph that declares your design stance across all projects. It does not describe individual buildings. It describes the recurring questions, methods, or values that unite your body of work.

The concept sentence is the compressed version: one line that a reviewer can read in five seconds and understand your stance. These two outputs become the textual spine of the portfolio.

A project statement is not a description of what you built. It is a declaration of what you investigated and why it matters. Weak statements describe — "This project explores light." Strong statements declare — "This project tests whether a single aperture can structure an entire domestic sequence."

Two-paragraph format: Paragraph one covers context, intent, and thesis in four to six sentences. Paragraph two covers development and outcome with evidence. Tone should be clear, active voice. Present tense for design intent, past tense for process.`,
    keyInsight: `"The concept sentence is the compressed version: one line a reviewer reads in five seconds."`,
    diagrams: [
      { label: "Weak vs. Strong Statements", desc: "'This project explores light' vs. 'This project tests whether a single aperture can structure an entire domestic sequence'" },
      { label: "Compression Flow", desc: "Paragraph (4–6 sentences) → Sentence (1 sentence) → Word (1 word) → Red Thread (unifying idea)" },
    ],
  },
  {
    id: 8,
    title: "Storyboarding & Visual Sequencing",
    overview: `The middle spreads do the heavy lifting. Each image must introduce a new dimension of the project without repeating what the opening already established. Three project-level sequence structures govern how images unfold:

Linear Narrative: Site → concept → development → resolution. The most common structure, following design process chronologically but with editorial selection.

Comparative Narrative: Before and after, existing and proposed. This structure works when the transformation is the argument.

Thematic Narrative: Organized around a design principle rather than chronology. Best for projects where the governing idea matters more than the timeline.

The Two-Track Reading System ensures the portfolio works at both speeds. Track 1 — Skim (30–90 seconds): Large images, clear hierarchy, minimal text. Track 2 — Study (5–15 minutes): Captions, process, analytical detail. The Relay Method means text and image should complete each other rather than duplicate. A caption that restates what the image already shows wastes space.`,
    keyInsight: `"Text and image should complete each other rather than duplicate."`,
    diagrams: [
      { label: "Three Sequence Structures", desc: "Linear: process-driven | Comparative: transformation-driven | Thematic: idea-driven" },
      { label: "Two-Track Reading System", desc: "Track 1 (skim): 30–90 sec, large images, clear hierarchy | Track 2 (study): 5–15 min, captions, process detail" },
    ],
  },
  {
    id: 9,
    title: "Typography as Architectural Voice",
    overview: `Typography in a portfolio is not decoration. It is the voice of the document — the way the portfolio speaks when you are not in the room. Limit to two to three complementary fonts. Establish clear size relationships and use weight and style strategically.

Modernist Workhorses: Helvetica, Futura, DIN, Univers — proven, neutral, versatile.

Humanist and Contemporary: Avenir, Söhne, Gill Sans, Circular — warmer, more approachable, still precise.

Editorial and Stylistic: Neue Montreal, GT Alpina, Monolisk, Didot, Minion Pro — personality with restraint.

Size standards for print portfolios: Titles at 24–48 pt, subheadings at 14–20 pt, body text at 9–11 pt, captions at 7–8 pt. These are not arbitrary — they map to the hierarchy of information on the page, ensuring the reader encounters content in the correct order.

Sans-serif fonts work best for digital screens and titles — modern, clean, accessible. Serif fonts serve body text and essays — traditional, authoritative. Monospaced fonts handle technical notes and data — utilitarian, precise.`,
    keyInsight: `"Typography is how your portfolio speaks when you are not in the room."`,
    diagrams: [
      { label: "Typeface Category Matrix", desc: "Sans-serif → screens/titles | Serif → body text | Monospaced → technical notes | Recommended pairings by category" },
      { label: "Size Hierarchy Standards", desc: "Titles: 24–48pt | Subheadings: 14–20pt | Body: 9–11pt | Captions: 7–8pt" },
    ],
  },
  {
    id: 10,
    title: "Grid Systems & Layout",
    overview: `A building's structural grid organizes load and space. A page grid organizes information and attention. The logic is the same. You already think in structural systems. A column grid on a page creates vertical divisions for placing text and images. Gutters between columns function like the clear span between structural members. Margins are the setback between content and the edge of the format.

Four grid types, one decision: Manuscript Grid — single text block, simplest structure, best for continuous prose. Column Grid — two to four columns, standard for print portfolios, can be dependent or independent. Modular Grid — columns plus horizontal flowlines subdividing the page into modules, the most versatile for mixed content. Hierarchical Grid — intuitive arrangement customized to content, sacrifices regularity for responsiveness.

The choice is not aesthetic preference — it is a structural decision that determines how the reader navigates the page. Every design problem requires a grid structure suited to its content.`,
    keyInsight: `"A portfolio without a grid is like a building without a structural system."`,
    diagrams: [
      { label: "Structural Column Grid vs. Page Grid", desc: "Building plan (structural grid) → same logic → Page layout (modular grid): Column = Col line, Bay = Module, Floor = Row" },
      { label: "Four Grid Types Comparison", desc: "Manuscript | Column | Modular | Hierarchical — suited to different content types and reading patterns" },
    ],
  },
  {
    id: 11,
    title: "The 12-Point System",
    overview: `A grid is only as coherent as its underlying mathematics. The system described here derives every measurement from a single value: 12 points. Margins, gutters, column widths, row heights, and baseline increments are all multiples of 12. Nothing on the page is arbitrary.

Document Setup: Page size 600 × 840 pt. Margins at 48/60/48/36 pt (multiples of 12). Six columns with 12 pt gutters. Eight rows with 12 pt gutters. Baseline grid at 12 pt increments.

The modular grid (columns and rows) and the baseline grid operate as complementary systems. The modular grid governs placement and proportion of content blocks. The baseline grid governs the internal rhythm of text. When both work together, the page achieves precision and clarity.

The six columns and eight rows produce 48 modules per page. The number of distinct layout arrangements those modules allow is, for practical purposes, limitless. Grids do not make dull layouts. Designers do. A well-built grid creates a field of possibilities.`,
    keyInsight: `"Every measurement is a multiple of 12. Nothing on the page is arbitrary."`,
    diagrams: [
      { label: "Grid Anatomy Overview", desc: "Column, Gutter, Margin, Module, Baseline Grid, Page Edge — labeled diagram showing all components" },
      { label: "Document Setup Table", desc: "Page: 600×840pt | Margins: 48/60/48/36pt | 6 cols | 12pt gutters | 8 rows | 12pt baseline" },
    ],
  },
  {
    id: 12,
    title: "Visual Design & Color Systems",
    overview: `Color in a portfolio is a system, not an accent. Three palette families serve architectural portfolios well:

Nature-Grounded: Terracotta, sage, sand, warm gray. These palettes ground the work in materiality and feel deliberate without being dramatic.

Muted Contemporary: Pale cyan, lavender, coral. Softer palettes that create visual interest without competing with project images.

Industrial Neutrals: Deep grays, charcoals, blacks. The most common choice in architecture — it disappears and lets the work speak.

Application strategies: Monochromatic uses a single base color in varying tints. Complementary Accent pairs a neutral primary with one accent color. Analogous Harmony uses three adjacent color wheel colors.

Tonal unity across spreads matters. When images from different projects sit side by side on a grid, their differences can become distracting. A consistent color treatment — whether desaturation, a unified white balance, or a limited tonal palette — binds disparate images into a single visual language.`,
    keyInsight: `"Tonal consistency provides chromatic unity across the grid."`,
    diagrams: [
      { label: "Three Palette Families", desc: "Nature-Grounded | Muted Contemporary | Industrial Neutrals — with color swatches and application contexts" },
      { label: "Tonal Consistency Across Spreads", desc: "Before: mixed color temperatures | After: unified white balance binds disparate images" },
    ],
  },
  {
    id: 13,
    title: "Cover & Table of Contents",
    overview: `The cover is the first design decision a reviewer encounters. Seven cover typologies:

Type 01 — Pure Minimal/Text-Only: Whitespace as primary element. Text under 8% of page area. Asymmetric placement. No imagery.

Type 02 — Dark Ground/Inverse: Light typography on dark surface. Visible texture. Atmospheric presence.

Type 03 — Hero Image/Central Focal: Three-band vertical structure. Single dominant image at 55–65%. Text remains peripheral.

Type 04 — Bleed Image + Type Band: Two-zone composition. Image bleeds to three edges. Bold type counterweights image.

Type 05 — Scattered Collage: Multi-image distributed composition. Irregular spacing. No single focal point.

Type 06 — Grid/Pattern System: Repeating geometric motif. Pattern replaces imagery. Letter-spacing calibrated to grid.

Type 07 — Abstract Line/Geometric: Freeform curves and intersecting lines. Stroke weight hierarchy. Text in negative space.

Six Table of Contents typologies range from Illustrated Section Grid to Narrative + List Hybrid, each suited to different portfolio structures and reading experiences.`,
    keyInsight: `"The cover is the first design decision a reviewer encounters."`,
    diagrams: [
      { label: "Seven Cover Typologies", desc: "01: Pure Minimal | 02: Dark Ground | 03: Hero Image | 04: Bleed + Band | 05: Collage | 06: Grid Pattern | 07: Abstract Line" },
      { label: "Six TOC Typologies", desc: "Illustrated Grid | Multi-Column Index | Thumbnail Gallery | Literary Chapter | Bold Number Cards | Narrative + List Hybrid" },
    ],
  },
  {
    id: 14,
    title: "Self-Editing Checklist",
    overview: `Before submission, audit your portfolio at four levels:

Project-Level: Clear project statement. Narrative-driven sequencing. Each image serves a communicative function. Captions provide non-visual information. Clear resolution presentation.

Portfolio-Level: Demonstrates range without losing coherence. Clear logic governing project order. Deliberate transitions between projects. Functions at both skim and study speeds. Formatting consistency throughout.

Visual and Production Quality: 300 DPI minimum for print. Typography consistency. Cohesive, intentional color palette. Proofreading complete. Multi-device testing for digital versions.

Narrative and Content: Each project answers context, concept, development, resolution. Images removed if not contributing to narrative. Design philosophy consistent. Sufficient process documentation.

Final Production: Separate optimized PDFs for print (300 DPI, CMYK) and digital (150 DPI, RGB, under 10 MB). All fonts embedded. Website portfolio live and updated. File sizes and load times tested.`,
    keyInsight: `"Every image should earn its place. If you cannot articulate what a specific image communicates within the project narrative, it should be removed."`,
    diagrams: [
      { label: "Four-Level Audit Framework", desc: "Project-level → Portfolio-level → Visual/Production → Narrative/Content" },
      { label: "File Export Standards", desc: "Print: 300 DPI, CMYK | Digital: 150 DPI, RGB, <10MB | Web: 72 DPI, 2–5MB" },
    ],
  },
];

// Lightbox component
function Lightbox({ diagram, onClose }) {
  if (!diagram) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        background: "rgba(0,0,0,0.85)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff", maxWidth: 720, width: "90%",
          padding: "48px 40px", position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: 16, right: 20,
            background: "none", border: "none",
            fontSize: 18, cursor: "pointer", color: "#999",
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          }}
        >
          Close
        </button>
        <div style={{
          width: "100%", aspectRatio: "16/10",
          background: "#f5f5f3",
          border: "1px solid #e8e8e6",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 28,
        }}>
          <div style={{
            padding: "32px 40px", textAlign: "center",
            maxWidth: 480,
          }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#1a2744", marginBottom: 16,
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 600,
            }}>
              {diagram.label}
            </div>
            <div style={{
              fontSize: 14, lineHeight: 1.7, color: "#666",
              fontFamily: "'Georgia', 'Palatino', serif",
            }}>
              {diagram.desc}
            </div>
          </div>
        </div>
        <div style={{
          fontSize: 11, color: "#999", textAlign: "center",
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          letterSpacing: "0.05em",
        }}>
          Reference diagram — replace with your own visual
        </div>
      </div>
    </div>
  );
}

export default function PortfolioGuide() {
  const [activeModule, setActiveModule] = useState(null);
  const [lightboxDiagram, setLightboxDiagram] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [visible, setVisible] = useState(true);
  const contentRef = useRef(null);

  const handleModuleClick = (mod) => {
    setVisible(false);
    setTimeout(() => {
      setActiveModule(mod);
      setVisible(true);
      if (contentRef.current) contentRef.current.scrollTop = 0;
    }, 300);
  };

  const handleBack = () => {
    setVisible(false);
    setTimeout(() => {
      setActiveModule(null);
      setVisible(true);
    }, 300);
  };

  const handleNavClick = (mod) => {
    if (mod.id === activeModule?.id) return;
    setVisible(false);
    setTimeout(() => {
      setActiveModule(mod);
      setVisible(true);
      if (contentRef.current) contentRef.current.scrollTop = 0;
    }, 250);
  };

  // Landing view
  if (!activeModule) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "#fafaf8",
        fontFamily: "'Georgia', 'Palatino', serif",
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Header */}
        <header style={{
          padding: "40px 48px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}>
          <div>
            <div style={{
              fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#999",
              fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              fontWeight: 500,
            }}>
              Portfolio Workshop — Spring 2026
            </div>
          </div>
          <div style={{
            fontSize: 11, color: "#999",
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          }}>
            Seth Looper
          </div>
        </header>

        {/* Title */}
        <div style={{
          padding: "80px 48px 40px",
          maxWidth: 640,
        }}>
          <h1 style={{
            fontSize: 42,
            fontWeight: 400,
            lineHeight: 1.15,
            color: "#1a1a1a",
            margin: 0,
            letterSpacing: "-0.01em",
          }}>
            Portfolio<br />as Narrative
          </h1>
          <div style={{
            width: 40, height: 2, background: "#1a2744",
            margin: "24px 0",
          }} />
          <p style={{
            fontSize: 16, lineHeight: 1.6, color: "#666",
            maxWidth: 420, margin: 0,
          }}>
            From the Red Thread to the Grid.
          </p>
        </div>

        {/* Module list */}
        <div style={{
          padding: "20px 48px 80px",
          flex: 1,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}>
          {MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => handleModuleClick(mod)}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 20,
                padding: "14px 0",
                borderBottom: "1px solid #e8e8e6",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = "8px";
                e.currentTarget.querySelector(".mod-title").style.color = "#1a2744";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = "0";
                e.currentTarget.querySelector(".mod-title").style.color = "#1a1a1a";
              }}
            >
              <span style={{
                fontSize: 12,
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                color: "#bbb",
                fontVariantNumeric: "tabular-nums",
                minWidth: 28,
                fontWeight: 500,
              }}>
                {String(mod.id).padStart(2, "0")}
              </span>
              <span
                className="mod-title"
                style={{
                  fontSize: 17,
                  color: "#1a1a1a",
                  transition: "color 0.2s ease",
                  letterSpacing: "-0.005em",
                }}
              >
                {mod.title}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer style={{
          padding: "24px 48px",
          borderTop: "1px solid #e8e8e6",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          color: "#bbb",
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
        }}>
          <span>Kent State University · CAED</span>
          <span>thresholdarch.com</span>
        </footer>
      </div>
    );
  }

  // Detail view
  const mod = activeModule;
  const paragraphs = mod.overview.split("\n\n");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fafaf8",
      fontFamily: "'Georgia', 'Palatino', serif",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Top bar */}
      <header style={{
        padding: "28px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e8e8e6",
        position: "sticky",
        top: 0,
        background: "#fafaf8",
        zIndex: 50,
      }}>
        <button
          onClick={handleBack}
          style={{
            background: "none", border: "none",
            fontSize: 12, color: "#999", cursor: "pointer",
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: 0,
          }}
        >
          ← Index
        </button>

        {/* Module numbers nav */}
        <div style={{
          display: "flex", gap: 6, flexWrap: "wrap",
          justifyContent: "flex-end",
        }}>
          {MODULES.map((m) => (
            <button
              key={m.id}
              onClick={() => handleNavClick(m)}
              style={{
                width: 30, height: 30,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: m.id === mod.id ? "#1a2744" : "transparent",
                color: m.id === mod.id ? "#fff" : "#bbb",
                border: "none",
                fontSize: 11,
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                fontWeight: m.id === mod.id ? 600 : 400,
                cursor: "pointer",
                borderRadius: 2,
                transition: "all 0.15s ease",
                fontVariantNumeric: "tabular-nums",
              }}
              onMouseEnter={(e) => {
                if (m.id !== mod.id) {
                  e.currentTarget.style.color = "#1a2744";
                }
              }}
              onMouseLeave={(e) => {
                if (m.id !== mod.id) {
                  e.currentTarget.style.color = "#bbb";
                }
              }}
            >
              {String(m.id).padStart(2, "0")}
            </button>
          ))}
        </div>
      </header>

      {/* Content area */}
      <div
        ref={contentRef}
        style={{
          flex: 1,
          padding: "60px 48px 80px",
          maxWidth: 720,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      >
        {/* Module number + title */}
        <div style={{
          fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase",
          color: "#bbb",
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          fontWeight: 500,
          marginBottom: 12,
        }}>
          Module {String(mod.id).padStart(2, "0")}
        </div>

        <h1 style={{
          fontSize: 34,
          fontWeight: 400,
          lineHeight: 1.2,
          color: "#1a1a1a",
          margin: "0 0 20px",
          letterSpacing: "-0.01em",
        }}>
          {mod.title}
        </h1>

        <div style={{
          width: 32, height: 2, background: "#1a2744",
          marginBottom: 40,
        }} />

        {/* Overview paragraphs */}
        <div style={{ marginBottom: 48 }}>
          {paragraphs.map((p, i) => (
            <p key={i} style={{
              fontSize: 15,
              lineHeight: 1.75,
              color: "#444",
              margin: "0 0 20px",
              maxWidth: 600,
            }}>
              {p}
            </p>
          ))}
        </div>

        {/* Key insight */}
        {mod.keyInsight && (
          <div style={{
            borderLeft: "3px solid #1a2744",
            paddingLeft: 24,
            marginBottom: 56,
            maxWidth: 520,
          }}>
            <p style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "#1a2744",
              fontStyle: "italic",
              margin: 0,
            }}>
              {mod.keyInsight}
            </p>
          </div>
        )}

        {/* Diagrams / image boxes */}
        <div style={{
          fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
          color: "#999",
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          fontWeight: 500,
          marginBottom: 16,
        }}>
          Reference Diagrams
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}>
          {mod.diagrams.map((d, i) => (
            <div
              key={i}
              onClick={() => setLightboxDiagram(d)}
              style={{
                aspectRatio: "4/3",
                background: "#f0f0ee",
                border: "1px solid #e4e4e2",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                padding: "24px 20px",
                textAlign: "center",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#eaeae8";
                e.currentTarget.style.borderColor = "#1a2744";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f0f0ee";
                e.currentTarget.style.borderColor = "#e4e4e2";
              }}
            >
              <div style={{
                fontSize: 11, fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1a2744",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                marginBottom: 8,
              }}>
                {d.label}
              </div>
              <div style={{
                fontSize: 11, color: "#999", lineHeight: 1.5,
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
              }}>
                Click to expand
              </div>
            </div>
          ))}
        </div>

        {/* Prev / Next nav */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 64,
          paddingTop: 24,
          borderTop: "1px solid #e8e8e6",
        }}>
          {mod.id > 1 ? (
            <button
              onClick={() => handleNavClick(MODULES[mod.id - 2])}
              style={{
                background: "none", border: "none",
                fontSize: 12, color: "#999", cursor: "pointer",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                padding: 0, textAlign: "left",
              }}
            >
              <span style={{ display: "block", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                Previous
              </span>
              {String(mod.id - 1).padStart(2, "0")} — {MODULES[mod.id - 2].title}
            </button>
          ) : <div />}
          {mod.id < MODULES.length ? (
            <button
              onClick={() => handleNavClick(MODULES[mod.id])}
              style={{
                background: "none", border: "none",
                fontSize: 12, color: "#999", cursor: "pointer",
                fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                padding: 0, textAlign: "right",
              }}
            >
              <span style={{ display: "block", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                Next
              </span>
              {String(mod.id + 1).padStart(2, "0")} — {MODULES[mod.id].title}
            </button>
          ) : <div />}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        diagram={lightboxDiagram}
        onClose={() => setLightboxDiagram(null)}
      />
    </div>
  );
}