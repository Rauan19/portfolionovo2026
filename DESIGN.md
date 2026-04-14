# Design System Document: The Kinetic Fullstack Identity

## 1. Overview & Creative North Star: "The Architectural Pulse"
This design system is built to transcend the "standard developer portfolio" by moving away from generic grids and flat boxes. The Creative North Star is **"The Architectural Pulse"**a visual language that balances the rigid precision of code (geometric 3D shapes, diagonal cuts) with the fluid nature of problem-solving (organic blobs, soft tonal transitions).

By utilizing high-contrast typography and a sophisticated "No-Line" layering strategy, the UI feels like a high-end digital editorial piece rather than a software interface. It communicates Rauan Neves' expertise as a fullstack developer: technical, trustworthy, and modern.

---

## 2. Colors: Tonal Depth & Vibrancy
The palette is rooted in a deep, atmospheric dark mode, punctuated by a hyper-technical green and a warm, humanistic orange.

### Color Tokens
*   **Surface (Base):** `#0c1321` (Dark, elegant foundation)
*   **Primary:** `#62df7d` (Vibrant green for "System Go" and active states)
*   **Secondary:** `#c0c8cc` (Cool slate for supporting elements)
*   **Tertiary:** `#ffb4a2` (The orange "Accent" for high-impact calls to action)
*   **Surface Container Tiers:**
    *   `surface_container_lowest`: `#070e1c`
    *   `surface_container_low`: `#151b2a`
    *   `surface_container_high`: `#232a39`

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to separate sections. Boundary definition must be achieved through:
1.  **Tonal Shifts:** Placing a `surface_container_high` card on a `surface` background.
2.  **Negative Space:** Using generous padding to define the start and end of modules.
3.  **Glassmorphism:** Using `surface_variant` at 40% opacity with a `20px` backdrop-blur for floating navbars or project cards.

### Signature Textures
*   **The Tech Glow:** Use a radial gradient for the Hero section: `radial-gradient(circle at top left, #16a34a15, transparent 40%)`.
*   **Diagonal Momentum:** Use 3-degree diagonal cuts on the bottom of large sections to break the horizontal "web" feel.

---

## 3. Typography: The Editorial Scale
We pair the technical precision of **Space Grotesk** with the humanist clarity of **Inter**.

*   **Display-LG (Space Grotesk, 3.5rem):** Reserved for hero headings. Letter-spacing should be set to `-0.04em` for a "compact, high-fashion" feel.
*   **Headline-MD (Space Grotesk, 1.75rem):** Used for section titles. Pair with a `primary` color underline or a small organic "blob" SVG behind the text.
*   **Body-LG (Inter, 1rem):** The workhorse for project descriptions. Line-height should be generous (`1.6`) to ensure readability against the dark background.
*   **Label-MD (Inter, 0.75rem):** All-caps with `0.1em` letter-spacing for category tags (e.g., "BACKEND", "UI/UX").

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for this minimalist aesthetic. We use "Atmospheric Lift."

*   **The Layering Principle:** 
    *   *Level 0:* `surface` (The canvas).
    *   *Level 1:* `surface_container_low` (Section backgrounds).
    *   *Level 2:* `surface_container_high` (Interactive cards/modals).
*   **Ambient Shadows:** For floating elements, use a shadow with a 40px blur, 0% spread, and an opacity of 6% using the `on_surface` color.
*   **The Ghost Border:** If a button or card feels lost, use the `outline_variant` (`#3e4a3d`) at **15% opacity**. This creates a "suggestion" of a border that reacts to light without cluttering the UI.

---

## 5. Components: Precision Elements

### Buttons
*   **Primary:** Filled with `primary_container` (`#1ca64d`). Shape: `0.375rem` (md) radius with a diagonal cut on the top-right corner (using `clip-path`).
*   **Secondary:** Ghost style. No background, `outline_variant` ghost border.
*   **Tertiary (The "Signal"):** Text-only using `tertiary` (#ffb4a2) with a small animated arrow icon.

### Cards & Project Showcases
*   **Rule:** Never use dividers.
*   **Structure:** Use a `surface_container_low` background. On hover, transition the background to `surface_container_highest` and apply a subtle `primary` glow to the top edge.
*   **Imagery:** Use a 3D geometric blob as a background element for project mockups to create a sense of depth and "object-ness."

### Chips (Tech Stack Tags)
*   **Style:** `surface_container_highest` background, `0.25rem` radius. Use `label-sm` typography. These should feel like "components" in a machine.

### Input Fields
*   **Interaction:** On focus, the field should not gain a heavy border. Instead, the background should shift from `surface_container_lowest` to `surface_container_high`, and the label should transition to the `primary` color.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts. Place a large headline on the left and a small supporting paragraph on the bottom-right of a container.
*   **Do** use "Blobs" as low-opacity background decorative elements behind 3D geometric shapes to soften the "tech" look.
*   **Do** use a high-contrast ratio between the background and typography (using `on_surface` at 90% opacity for body text).

### Don't
*   **Don't** use pure black (#000). Always use the `surface` palette to maintain the "ink-like" depth.
*   **Don't** use standard 12-column grids strictly. Let elements overlapfor example, let a project image bleed over the edge of its container.
*   **Don't** use 100% opaque borders. They create "visual noise" and destroy the premium editorial feel.