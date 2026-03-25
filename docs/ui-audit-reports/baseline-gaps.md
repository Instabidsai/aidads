# Baseline Gap Analysis: aidads.com vs linear.app

## Reference: linear.app
## Date: 2026-03-25

## Key Gaps (ranked by visual impact)

### 1. HERO — Typography & Presence (CRITICAL)
- **Ours**: Standard Tailwind text-4xl/5xl/7xl, basic gradient text, generic feel
- **Linear**: `text-wrap: balance`, responsive title tokens (title-9 → title-5), precise letter-spacing variables, `text-wrap: pretty` for body
- **Gap**: Our hero text feels like a Tailwind template. Linear's feels engineered. Need: tighter letter-spacing on headings, larger hero text, balanced wrapping.

### 2. COLOR DEPTH — Too Many Accent Colors
- **Ours**: 5 accent colors (indigo, cyan, amber, green, rose) all competing
- **Linear**: 4-tier text hierarchy (primary→quaternary), restrained accent use, ONE primary accent
- **Gap**: We look like a color wheel. Linear looks refined. Need: reduce accent noise, establish proper 4-tier text hierarchy.

### 3. SPACING — Generic Tailwind Rhythm
- **Ours**: py-24/py-32 sections, px-6 padding, standard gap-4/8
- **Linear**: Design-token-driven spacing, tighter vertical rhythm, more breathing room in hero, tighter in content
- **Gap**: Our spacing is uniform. Need: larger hero spacing, tighter card spacing, more varied section heights.

### 4. CARDS — Flat Gradient Border Trick
- **Ours**: `.gradient-border` with pseudo-element mask — clever but every card looks the same
- **Linear**: Subtle opacity variations (0.3-1.0), minimal borders, depth through shadow not border
- **Gap**: Our cards all look identical. Need: vary card treatments, add subtle shadows, reduce border dependence.

### 5. MOTION — No Meaningful Animation
- **Ours**: Framer-motion fade-in-up on every section (repetitive), canvas network background
- **Linear**: CSS keyframe grid animations with `steps(1, end)`, discrete transitions, intentional micro-interactions
- **Gap**: Our animations all do the same thing. Need: varied entrance animations, reduce repetition, add hover micro-interactions.

### 6. NAVIGATION — Basic Fixed Bar
- **Ours**: Fixed nav, bg blur on scroll, standard horizontal links
- **Linear**: Responsive breakpoint system, minimal chrome
- **Gap**: Nav is functional but generic. Needs: slimmer profile, better scroll behavior.

### 7. BUTTON DESIGN — Template Feel
- **Ours**: rounded-lg, solid bg, basic hover opacity change
- **Linear**: Precise text sizing, inverted contrast, semibold weight, sophisticated hover states
- **Gap**: Buttons feel like default Tailwind. Need: more refined sizing, better hover transitions.

## Baseline Score: 5.5/10 compared to linear.app
- Typography: 5/10 (template-tier)
- Color: 5/10 (too many competing accents)
- Spacing: 6/10 (functional but generic)
- Cards: 5/10 (repetitive treatment)
- Motion: 5/10 (repetitive fade-ups)
- Navigation: 6/10 (works, not refined)
- Buttons/CTAs: 5/10 (template feel)
- Overall impression: "Good AI-generated site" not "Designer-built site"
