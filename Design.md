---
name: Vexoro High-Contrast Studio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#e5bdb8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#ac8884'
  outline-variant: '#5c403c'
  surface-tint: '#ffb4aa'
  primary: '#ffb4aa'
  on-primary: '#690004'
  primary-container: '#ff5448'
  on-primary-container: '#5c0003'
  inverse-primary: '#bd1014'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c9c6c5'
  on-tertiary: '#313030'
  tertiary-container: '#929090'
  on-tertiary-container: '#2a2a29'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#930009'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display:
    fontFamily: Archivo Narrow
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 100px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Public Sans
    fontSize: 20px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0em
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  eyebrow:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.2em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.05em
spacing:
  unit: 8px
  section-padding: 120px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
This design system embodies a high-impact, editorial aesthetic tailored for a high-end digital engineering studio. The visual language is rooted in "New Radicalism"—a blend of brutalist efficiency and premium magazine layout. The personality is authoritative, precise, and unapologetically bold. 

The strategy relies on extreme contrast and the rejection of soft UI trends (gradients, blurs, and shadows). It uses raw geometric forms and a stark monochrome base to signal engineering rigor, while the aggressive red accent provides a sense of urgency and creative energy.

## Colors
The palette is restricted to four high-intensity values to maintain the graphic, flat aesthetic.

- **Primary (Vexoro Red):** Used exclusively for calls to action, active states, and structural highlights.
- **Backgrounds:** Pure Black (#000000) and Pure White (#FFFFFF) are used in alternating full-bleed sections to create a rhythmic, high-contrast scroll experience.
- **Text:** On black backgrounds, use Pure White (#FFFFFF). On white backgrounds, use Off-Black (#0A0A0A) for improved legibility without sacrificing the high-contrast feel.
- **Borders:** 1px width in the inverse color of the background (White on Black, Black on White).

## Typography
Typography is the primary driver of the visual hierarchy. 

1. **Headlines:** Set in Archivo Narrow (Ultra-Bold/Black weights). Letter spacing must be tight (negative) to create a "wall of text" effect.
2. **Body:** Public Sans provides a clean, neutral balance to the aggressive headlines. It is used for all long-form content and descriptions.
3. **Utility/Metadata:** JetBrains Mono is used for "eyebrow" text (labels above headlines), navigation items, and technical data. It must always be uppercase with generous letter spacing to evoke a blueprint or engineering schematic feel.

## Layout & Spacing
The layout follows a strict 12-column grid system with 0px or 1px gutters to emphasize the modular, flat construction. 

- **Alternating Sections:** Content is divided into full-bleed horizontal bands that alternate background colors. 
- **The "Frame":** All content is contained within a heavy outer margin (64px on desktop), often defined by a 1px border that creates a "box within a box" effect.
- **Rhythm:** Vertical spacing between components should be aggressive (large gaps) to give the bold typography room to breathe.

## Elevation & Depth
This system uses **Zero-Depth Construction**. There are no shadows, z-axis blurs, or overlapping layers that imply physical height.

- **Flat Tiers:** Hierarchy is achieved through color inversion rather than elevation.
- **Interactions:** When an element is focused or hovered, it does not "lift." Instead, it swaps its fill color (e.g., a black card with a white border becomes a white card with black text).
- **Graphic Accents:** Use floating geometric shapes (rings, 45-degree diagonal lines) on the same plane as the content to create visual interest.

## Shapes
The shape language is strictly **Geometric and Sharp**. 
- **Corners:** Every element (buttons, cards, inputs) must have a 0px border radius.
- **Geometry:** Use circles for decorative rings, but all functional UI containers must be rectangular.
- **Lines:** Use 1px or 2px solid lines for dividers. Never use dashed or dotted lines.

## Components
Consistent execution of these components is vital to maintaining the editorial feel:

- **Buttons:** Large, rectangular, solid Vexoro Red (#E8352E). Text is white JetBrains Mono, uppercase. On hover, the button should invert to White or Black with a Red border.
- **Cards:** Defined by a 1px border. No background color (transparent) unless used for a specific "high-light" section. On hover, the border-draw animation triggers, tracing the perimeter.
- **Inputs:** Simple bottom-border or full-box 1px outline. Label sits inside the box in Mono typography. No glow on focus—only a change in border thickness or color to Red.
- **Chips/Tags:** Rectangular boxes with 1px borders and Mono text. Small, tight padding.
- **Lists:** Separated by horizontal 1px lines that span the full width of the container. Use large numbers (Archivo Narrow) as indices for list items.
- **Geometric Accents:** Small Red squares or diagonal "strike-through" lines used as bullet points or decoration in the corners of sections.