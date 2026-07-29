# Amelia's Snap Design System

A personal design system for Amelia — combines Snap Inc.'s 2026 brand standards with a personal, clean aesthetic for slides, mocks, and prototypes. Use this when designing anything Snap-flavored: internal decks, feature pitches, throwaway prototypes, or production-style mocks.

## Quick start

```html
<link rel="stylesheet" href="colors_and_type.css">
```

That gets you the type scale, the color tokens (`--snap-yellow`, `--fg`, `--bg-elev`…), spacing/radius/shadow tokens, and Inter / Inter Tight loaded from Google Fonts. From there compose with the React components in `ui_kits/` or `slides/`.

## What's in here

| Path | What |
| --- | --- |
| `colors_and_type.css` | All design tokens — colors, type scale, spacing, radii, shadows, motion. **Start here.** |
| `fonts/` | Snap's Graphik (legacy) + Ghost Sans (proprietary). Inter is loaded from Google Fonts. |
| `assets/logos/` | Snap Ghost logo — official `ghost-logo.png` (positive) and `ghost-logo-dark.png` (negative). |
| `assets/bitmojis/` | Amelia's personal Bitmojis. Use sparingly, only when it fits naturally. |
| `slides/` | HTML slide templates matching the 2026 Snap brand deck. |
| `ui_kits/snapchat-app/` | High-fidelity recreations of core Snapchat app screens. |
| `preview/` | Cards rendered in the Design System tab. |
| `SKILL.md` | Agent-Skill manifest — read this first when invoked. |

## Sources

- **`uploads/2026 SNAPCHAT BRAND TEMPLATE.pdf`** — 86-page Snap brand deck. Official guidelines for type, color, ghost logo, slide templates. Source of truth for the visual direction.
- **`uploads/snap_fonts.zip`** — Graphik (current/legacy), Ghost Sans (proprietary replacement), Graphik Wide, Program OT, Graphik Arabic. Subset extracted to `fonts/`.
- **`uploads/Feature Refresh Tool Presentation.pptx`** — referenced but not present in upload set. If reattached, examples should go in `slides/examples/`.
- **`uploads/*.png|jpg`** — Amelia's Bitmojis (13 expressions). Copied to `assets/bitmojis/`.
- **`agent-toolbox/`** — local mounted folder. Largely Claude-Code agent infrastructure (skills, plugins, scripts), not Snap UI source. Useful for cross-referencing skill structure but not directly mined for UI.

## Brand direction (loose, personal)

Amelia treats Snap's brand as **inspiration, not strict adherence**. Warm off-white backgrounds, occasional yellow accent moments, bold sans-serif headlines, generous whitespace, card-based layouts. Bitmojis are a personality sprinkle — used only when natural.

---

## CONTENT FUNDAMENTALS

How copy is written across this system. Pulled from the Snap brand template's voice + Amelia's personal note ("zero dead words, instantly digestible").

### Voice
- **Direct.** No hedging, no throat-clearing. State the thing.
- **Confident, not corporate.** Real sentences, contractions allowed (`it's`, `you'll`).
- **Warm + a little playful** — this is Snap, not a bank. Lean light, never silly-for-its-own-sake.
- **Specific over generic.** "Send to 3 friends" not "engage your network."

### Tone
- **Active voice** wherever possible.
- **Second person ("you")** when addressing the reader; **first-person plural ("we")** when speaking as the team.
- **Short sentences. Then a longer one for rhythm.** Then short again.
- **Lead with the takeaway.** Inverted-pyramid: most important sentence first, supporting context after.

### Casing
- **Title Case** for slide headlines and section headers (`Agenda Headline Goes Here`, `Cover Slides`).
- **Sentence case** for body, captions, button labels, and most UI (`Send a snap`, `View story`).
- **ALL CAPS** ONLY for eyebrows / category labels (`INTRODUCING`, `LABEL GOES HERE`) and short stat units. Tracked +12% letter-spacing.
- **Numerals** for stats (`5M`, `87%`) — never spelled out.

### Punctuation & formatting
- **No terminal periods on standalone headlines, button labels, or short list items.** Periods on full body sentences only.
- **Em dashes — like this —** for asides. No spaced en-dashes.
- **Curly quotes** (`"…"` `'…'`) in prose. Straight quotes in code only.
- **Numbered agenda items** are zero-padded: `01`, `02`, `03`.
- **Stat units** (`%`, `M`, `K`, `x`) sit tight against the number with no space.

### Vibe — examples

✅ **Good** (clear, direct, leads with the value)
- "Spotlight reaches 500M+ monthly viewers."
- "Three new ad formats. Same auction, more inventory."
- "We rebuilt the camera from the lens up."

❌ **Avoid** (vague, padded, marketing-flavored)
- "Spotlight is a great way to reach a wide audience of users."
- "Introducing the future of advertising on our platform."
- "Leveraging cutting-edge technology to deliver value."

### Emoji
- **Almost never.** The brand template doesn't use them; Snap's UI uses Bitmojis for expressivity instead.
- Bitmojis (`assets/bitmojis/`) replace emoji where personality is needed. Use one per slide, max. Skip if it doesn't add meaning.
- Unicode bullets (`●`, `→`) are fine for in-deck lists, mirroring the brand template's style.

---

## VISUAL FOUNDATIONS

### Color
Three modes. Pick one per surface (slide, screen, card group); don't mix mid-layout.

- **Off-white surface** (default) — `#FBFBF5` background, black type, yellow accents on CTAs and stats. Most common.
- **Black surface** — pure `#000000` background, off-white type, yellow accents only. Used for high-impact statement slides and full-bleed image backgrounds (with image at 25% opacity).
- **Yellow surface** — `#FFFC00` background, black type. Reserved for cover slides, logo lockups, hero stat moments. Never tints; pure yellow.

Pale yellow `#FFFFE1` is a warmer alternative to off-white — use when off-white feels too neutral. Never combine pale yellow and off-white in the same view.

Secondary colors (red/purple/green/blue) appear **only** as data accents, ring states, or product-area tints — never as backgrounds, never as type color.

### Typography
**Inter Tight** for display & headlines (Semibold/Bold, tight tracking `-0.02em`). **Inter** for body. JetBrains Mono for code; Ghost Sans Mono is available for Snap-flavored mono moments. Type does most of the heavy lifting — headlines run large (44–96px on slides), bodies stay 16–20px.

### Spacing
Strict 8pt grid (4pt half-step for fine alignment only). Slides have 64–96px outside margins. Card padding is 24px (`--space-5`) standard, 32px for hero. **Generous whitespace is the rule** — when in doubt, add more.

### Backgrounds
- **Solid color** (off-white / black / yellow) — default.
- **Full-bleed photography** at 25% opacity over solid black — for impact statement slides only. Image must serve the narrative; never stock-photo filler.
- **No gradients.** Snap's brand is flat. Yellow-to-yellow tonal moments are the only exception.
- **No textures, no patterns, no grain.** Clean surfaces only.

### Animation
- Default ease: `cubic-bezier(0.2, 0.8, 0.2, 1)` (`--ease-out`) — fast in, settled out. 200ms.
- Spring/overshoot (`--ease-spring`) for delightful moments — sticker drops, capture confirmation.
- **Fades + small scales (0.96 → 1.0)** are the dominant motion vocabulary. No flips, no slides-from-edges.
- **No bounces on functional UI.** Spring is reserved for celebratory moments.
- **120ms** for micro (hover, press), **200ms** for transitions, **360ms** for screen changes.

### Hover states
- **Buttons / interactive cards:** brightness +5% on dark fills, brightness −4% on light fills. Never opacity-only.
- **Text links:** underline appears (none → 1px solid currentColor at 60% opacity).
- **Icons in chrome:** subtle background pill appears (`rgba(0,0,0,0.06)` on light, `rgba(255,255,255,0.08)` on dark).

### Press / active states
- Scale to **0.97** with `--dur-fast` `--ease-out`. Combine with brightness shift.
- For chips and pills, the fill darkens by ~10%; never changes hue.

### Borders
- 1px, `--border` (`#E5E4DC`) on light surfaces. 1px `--border-strong` for high-contrast separators.
- Buttons and pills are **borderless by default**; rely on fill contrast.
- Outline style only on secondary buttons (1px `currentColor`, transparent fill).

### Shadows
- Soft, low-opacity, tight blur. Never harsh.
- `--shadow-sm` (cards), `--shadow-md` (raised UI like menus), `--shadow-lg` (modals).
- One special: `--shadow-yellow` — yellow glow for hero CTAs only.
- **No inner shadows.** No neumorphism.

### Capsules vs. protection gradients
- Snapchat UI is **capsule-first** — pills (`--radius-pill`) are the dominant container shape. Uses capsules for chips, buttons, status indicators, story rings.
- **Protection gradients** (top/bottom black-to-transparent over photo content) are used only on full-bleed image slides for legibility. 0% to 60% opacity, 120px tall.

### Transparency & blur
- **Sparingly.** UI overlays use `rgba(0,0,0,0.5)` + `backdrop-filter: blur(20px)` on photo content (camera UI, story chrome).
- **No frosted glass on slides.** Decks stay flat.

### Imagery vibe
- **Warm, sunlit, real-world.** Snap photos are spontaneous, not staged.
- **Saturated but natural** — never over-graded, never b&w (unless intentional editorial moment).
- **Prefer human moments** over product shots — friends, faces, candid scenes.
- **No grain, no film FX, no Instagram filters.** Imagery should look like a real iPhone photo.

### Corner radii
- Pills (`--radius-pill: 999px`) — buttons, chips, story rings, status cells.
- 24px (`--radius-xl`) — large cards, slide content blocks, modal sheets.
- 16px (`--radius-lg`) — standard cards.
- 12px (`--radius-md`) — input fields, small cards.
- 8px / 4px — fine UI (toggles, badges, code blocks).
- **No sharp corners** anywhere except full-bleed image edges.

### Card anatomy
- Background `--bg-elev` (#FFFFFF on light surface).
- 16–24px radius depending on size.
- 24px padding default.
- `--shadow-sm` by default, no border. Border + no-shadow is an alternative low-elevation style.
- **No left-border accent stripes.** Use full-fill color blocks if you need to categorize.

### Layout rules
- **12-column grid** at slide / large-page scale (1920×1080 slides; 1440 max content width on web).
- **Fixed slide canvas:** 1920×1080. Never reflow slide content.
- **No fixed-position UI** in slides; floating elements only on app/product mocks.
- **Single hero element per slide** — one stat, one image, one headline. If you need more, split slides.

---

## ICONOGRAPHY

Snap doesn't ship a public icon font. Inside the app, icons are custom-drawn SVG/PNG sprites tied to specific features (Camera shutter, Chat send arrow, Spotlight bolt, Stories ring, Discover compass, Bitmoji avatar slot). The 2026 brand template's "Icon Library" is marked **WIP** and isn't downloadable yet.

**Approach for this design system:**
1. **For Snap-specific feature icons** (Camera, Chat, Stories, Spotlight, Map, Discover, Memories, Bitmoji slot) — recreate as small SVGs in `assets/icons/snap/` matching the in-app stroke style (filled, 2px conceptual stroke, rounded joins, generally 24×24 grid).
2. **For generic UI icons** (chevrons, close, back, settings gear, plus, search, share, more) — use **Lucide** from CDN. Lucide's stroke style (1.5–2px, rounded caps and joins, 24×24 grid) closely matches Snap's UI feel. **Flagged substitution — swap for Snap's official icon library when it ships.**
3. **No emoji** as icons. Bitmojis stand in for any "expression" need.
4. **No unicode characters** as icons in product UI. Bullets (`●`) and arrows (`→`, `↗`) are fine in-deck.

**Lucide via CDN:**
```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="camera"></i>
<script>lucide.createIcons();</script>
```

Or pull individual SVGs from `https://unpkg.com/lucide-static@latest/icons/<name>.svg`.

**Snap-specific icon set** (custom in `assets/icons/snap/`): `ghost.svg`, `chat.svg`, `camera-shutter.svg`, `stories-ring.svg`, `spotlight.svg`, `map-pin.svg`, `bitmoji-slot.svg`, `memories.svg`, `discover-compass.svg`, `send-snap.svg`.

---

## Index

- `README.md` (this file) — start here
- `SKILL.md` — agent invocation
- `colors_and_type.css` — design tokens
- `fonts/` — webfont files
- `assets/logos/` — Snap Ghost (official positive + negative PNGs)
- `assets/bitmojis/` — Amelia's Bitmojis
- `assets/icons/snap/` — custom Snap feature icons
- `slides/` — slide templates (cover, agenda, statement, stat, product, divider, thank-you)
- `ui_kits/snapchat-app/` — Snapchat mobile UI recreation
- `preview/` — Design System tab cards
