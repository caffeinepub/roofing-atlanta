# Design Brief

## Direction

Roofing Atlanta — A high-end, conversion-focused, mobile-first roofing contractor website exuding professional trustworthiness with navy blue authority and warm orange urgency.

## Tone

Professional luxury with minimalist restraint — premium authority, not trendy. Navy grounds trustworthiness; orange accents demand action on CTAs.

## Differentiation

Atypical navy + orange palette for roofing (most use green/red) conveys premium authority while mobile-first conversion layout prioritizes phone number and booking calendars above the fold.

## Color Palette

| Token      | OKLCH               | Role                             |
| ---------- | ------------------- | -------------------------------- |
| background | 0.98 0.008 260      | Cool off-white, breathing room   |
| foreground | 0.15 0.012 240      | Deep navy text, high contrast    |
| card       | 1.0 0.0 0           | Pure white, clean card surfaces  |
| primary    | 0.40 0.14 240       | Professional navy, primary CTAs  |
| accent     | 0.60 0.15 45        | Warm orange, urgent action focus |
| muted      | 0.94 0.01 260       | Light grey, secondary info       |

## Typography

- Display: Space Grotesk — Modern geometric headlines, hero text, navigation
- Body: Plus Jakarta Sans — Accessible body copy, UI labels, form text
- Scale: hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Subtle card shadows (2px–6px) create surface hierarchy; no glow effects. Borders define zones over background color shifts alone.

## Structural Zones

| Zone     | Background                | Border           | Notes                                    |
| -------- | ------------------------- | ---------------- | ---------------------------------------- |
| Header   | White (card)              | 1px border-bottom| Navy text, orange CTA button right-fixed |
| Hero     | Full-bleed image + overlay| —                | White text, large orange CTA centered   |
| Content  | Alternate white/muted     | —                | White for primary, muted for secondary  |
| Footer   | Navy primary              | Border-top       | White text, orange outline buttons      |

## Spacing & Rhythm

Spacious 2rem section gaps; compact 1rem micro-spacing within cards. Every other content section alternates background (white/muted) for rhythm and visual breathing.

## Component Patterns

- Buttons: Rounded 8px, navy primary or warm orange accent, 0.3s smooth hover opacity
- Cards: White background, subtle shadow, 1px border, rounded 8px
- Badges: Navy background, white text, 6px padding, rounded 4px

## Motion

Entrance: Subtle fade-in on page load (0.3s ease-out). Hover: All interactive elements transition opacity 0.3s. Decorative: None — focus on clarity.

## Constraints

- Navy + orange palette only; no purples, greens, or rainbow effects
- Mobile-first: Phone CTA always visible top-right, lead form above fold
- Conversion obsessed: CTA buttons never smaller than 48px height on mobile
- No full-page gradients; white/muted surfaces with card shadows

## Signature Detail

Navy + orange contrast is distinctive for roofing category, paired with fixed-position mobile phone CTA creates immediate conversion opportunity and premium brand recall.
