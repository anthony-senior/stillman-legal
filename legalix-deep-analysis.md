# Legalix Home One -- Deep Design Analysis

*Extracted: 2026-04-08*
*Source: https://legalix.webflow.io/home-one*
*Purpose: Exact specifications for rebuilding in Next.js + Tailwind*
*Total page height: 8126px at 1440px viewport*

---

## 1. Design Tokens (CSS Variables)

These are the actual CSS custom properties from the Webflow stylesheet:

```css
:root {
  --heading-two-color: #47414f;    /* Dark Purple -- section backgrounds, heading color */
  --first-color: #c2b697;          /* Gold/Tan -- accent, buttons, decorative text */
  --top-heading-text-color: #2a2e31; /* Charcoal -- footer bg, hero bg, dark text */
  --h1-color: #fdfdfd;             /* Near White -- light text on dark, off-white bg */
  --white: white;                  /* Pure White */
  --paragraph-color: #c1c1c1;     /* Medium Gray -- body text on dark backgrounds */
}
```

### Tailwind Theme Mapping

```js
colors: {
  charcoal: '#2a2e31',      // --top-heading-text-color
  purple: '#47414f',         // --heading-two-color
  gold: '#c2b697',           // --first-color
  offwhite: '#fdfdfd',       // --h1-color
  gray: {
    body: '#686868',         // body text on light backgrounds
    light: '#c1c1c1',       // --paragraph-color (text on dark)
  },
  goldAlpha: {
    20: 'rgba(194, 182, 151, 0.2)',  // watermark text
    10: 'rgba(194, 182, 151, 0.1)',  // subtle tinted bg
    33: '#c2b69733',                  // progress bar bg
  }
}
```

---

## 2. Typography System

### Fonts Loaded

```
Google Fonts URL:
DM Sans: 300, 400, 500, 600, 700
Playfair Display: 300, 400, 500, 600, 700
Tenor Sans: 300, 400, 500, 600, 700 (loaded but barely used)
```

Only 3 weights are actually used across both fonts:
- **Playfair Display 400** -- all headings
- **DM Sans 300** -- body text, nav links
- **DM Sans 600** -- buttons

### Exact Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing | Transform | Color (light bg) | Color (dark bg) |
|---------|------|------|--------|-------------|---------------|-----------|-----------------|-----------------|
| H1 | Playfair Display | 85px (5.3125rem) | 400 | 95px | normal | capitalize | #47414f | #ffffff |
| H2 | Playfair Display | 70px (4.375rem) | 400 | 80px | normal | capitalize | #47414f | #fdfdfd |
| H3 | Playfair Display | 85px* | 400 | 95px | normal | capitalize | #47414f | -- |
| H4 | Playfair Display | 30px (1.875rem) | 400 | 40px | normal | capitalize | #47414f | -- |
| H5 | DM Sans | 18px | 400 | 30px | normal | capitalize | -- | -- |
| H6 | Playfair Display | 15px | 400 | 30px | normal | capitalize | -- | -- |
| Body/P | DM Sans | 18px (1.125rem) | 300 | 30px (1.875rem) | normal | none | #47414f (dark) or #686868 | #c1c1c1 |
| Nav links | DM Sans | 18px | 300 | 30px | normal | none | -- | #ffffff |
| Button | DM Sans | 15px (0.9375rem) | 600 | 30px | 0.15rem (2.4px) | uppercase | #2a2e31 | -- |
| Watermark | Playfair Display | 19rem (304px) | 400 | 15rem (240px) | normal | none | #f9f8f5 | -- |

*Note: H3 is used for the stats numbers (75+, 15+, etc.) at the same size as H1 -- 85px.

### Key Typography Notes

- All headings use `text-transform: capitalize` (title case), NOT uppercase
- Gold accent words within headings use `<span>` with `color: #c2b697`
- Body text at weight 300 (light) is critical to the airy, elegant feel
- No bold text anywhere on the page. The heaviest weight is 600, only on buttons
- The watermark/decorative text is 19rem (304px) Playfair Display at near-white (#f9f8f5), positioned absolute at bottom-left of its container

---

## 3. Page Structure (Top to Bottom)

Total page: 8126px tall at 1440px viewport width. Here is every section in order with its exact Y position and height:

### Section 1: Header/Navigation (fixed)
- **Y Position:** 0 (fixed, z-index: 9999)
- **Height:** 91px
- **Background:** transparent (rgba(0,0,0,0))
- **Position:** fixed, top: 0, left: 0, right: 0
- **Scroll behavior:** Header slides UP (translateY -100%) when scrolling down, slides back when scrolling up. Uses `will-change: transform` with translate3d for GPU acceleration.

### Section 2: Hero Banner (.banner-section)
- **Y Position:** 0
- **Height:** 770px
- **Background:** rgb(42, 46, 49) -- charcoal
- **Padding:** 180px top, 15px sides, 400px bottom
- **Content container:** 1230px centered (margin: 0 90px)
- **Layout:** Flex row, space-between, align-items center, gap 60px

### Section 3: Hero Image Overlap (.large-img-container)
- **Y Position:** 470px (overlaps banner by ~300px via negative margin)
- **Height:** 855px
- **Position:** relative
- **Contains:** .home-one-banner-wrapper with margin-top: -300px
- **The wrapper:** flex column, justify-content: flex-end, align-items: flex-start, overflow: hidden, z-index: 2
- **Contents:** Large hero image + "Legalix" watermark text (absolute positioned, bottom-left)

### Section 4: Counter/Stats Section (.counter-section)
- **Y Position:** 1325px
- **Height:** 833px
- **Background:** transparent (white from body)
- **Padding:** 116px top, 15px sides, 126px bottom
- **Layout:** Two parts stacked:
  1. Top row: Flex row, gap 109px, 1230px container -- decorative flower image (left, display:none on desktop) + heading block (right, ~789px wide)
  2. Bottom row: Flex row, space-between, gap 30px, margin-top 30px -- 4 stat items with vertical dividers

### Section 5: Two-Image Section (.two-img-section)
- **Y Position:** 2158px
- **Height:** 1075px
- **Background:** rgb(255, 255, 255)
- **Padding:** 127px top, 15px sides, 128px bottom
- **Layout:** Flex row, space-between, gap 30px, 1230px container
  - **Left column (.two-img-section-left):** 600px wide, flex column, gap 55px -- H2 heading (240px tall) + image with overlay (484px tall)
  - **Right column (.two-img-section-right):** 516px wide -- image (590px tall) + two paragraphs

### Section 6: Practice Areas Heading (.toggle-section-heading)
- **Y Position:** 3233px
- **Height:** 210px
- **Background:** white
- **Padding:** 0 top, 15px sides, 50px bottom
- **Layout:** Flex row, justify center, gap 16px
- **Content:** Centered H2 "Legal Solutions Tailored to Your Needs" in a 736px wide wrapper

### Section 7: Practice Areas Toggle List (.toggle-menus)
- **Y Position:** 3443px
- **Height:** 966px
- **Background:** white
- **Padding:** 0 top, 0 sides, 180px bottom
- **Content:** 6 practice area rows, each a link (.toggle-iteams-wrapper)

### Section 8: Why Choose Us (.why-choose-sectipon)
- **Y Position:** 4409px
- **Height:** 908px
- **Background:** rgb(71, 65, 79) -- dark purple
- **Padding:** 120px top/bottom, 15px sides
- **Layout:** Flex row, gap 80px, 1230px container
  - **Left (.why-choose-left-section):** 535px wide, relative position -- decorative flower (absolute), H2 (white), paragraph (gray), progress bars
  - **Right (.why-choose-right-section):** 615px wide -- single large image with overlay animation

### Section 9: Team Gallery (.gallery)
- **Y Position:** 5317px
- **Height:** 1600px
- **Background:** transparent
- **Padding:** 100px top, 0 sides, 120px bottom
- **Container:** 1230px centered
- **Content:** Centered H2 heading + team-gallery-main (1100px tall, flex row, centered items)

### Section 10: Testimonials Slider (.slider-section)
- **Y Position:** 6917px
- **Height:** 610px
- **Background:** transparent
- **Padding:** 0 top, 0 sides, 130px bottom
- **Overflow:** hidden
- **Container:** 1230px centered, relative position

### Section 11: Footer (.footer)
- **Y Position:** 7527px
- **Height:** 599px
- **Background:** rgb(42, 46, 49) -- charcoal
- **Padding:** 120px top, 0 bottom
- **Structure:**
  1. `.footer-iteam-wrapper` (415px tall, padding-bottom: 115px) -- CTA, nav links, contact
  2. `.social-links-footer-section` (63px tall, padding: 21px 15px 15px) -- social icons + copyright

---

## 4. Component Deep Dives

### 4a. Navigation Header

```
Structure:
<header class="header-one"> (fixed, z-index: 9999)
  <section class="header-one-main">
    <div class="navbar-two w-nav"> (role="banner")
      <div class="container-third w-container">
        <div class="w-layout-hflex flex-block">
          <!-- Logo: SVG image, 95x30px -->
          <a class="legalix w-nav-brand">
            <img src="Legalix.svg" width="95" height="30">
          </a>
          
          <!-- Navigation: 5 dropdown items -->
          <nav class="nav-menu w-nav-menu">
            [Home] [Practice Areas] [Pages] [Blog] [Shop]
            Each is a w-dropdown with hover-triggered dropdown
          </nav>
          
          <!-- Right side -->
          [Cart icon + count] [Phone: 888 123 4567]
        </div>
      </div>
    </div>
  </section>
</header>
```

**Key nav behaviors:**
- **Transparent on load** -- overlays the dark hero
- **Fixed positioning** -- stays at top during scroll
- **Hide/reveal on scroll** -- uses translate3d(0px, -100%, 0px) to hide when scrolling down, translate3d(0px, 0%, 0px) to show when scrolling up. This is Webflow IX2 animation.
- **Dropdown behavior:** Hover-triggered (data-hover="true", data-delay="500ms"). Dropdown lists animate in with height: 0% -> auto and opacity: 0 -> 1.
- **Chevron icons rotate** on dropdown open (transform: rotateZ)
- **"Pages" has a mega-menu** -- a wider dropdown panel (class="megamenu") that's display:none initially, animates in with translateY(-20px) -> 0 and opacity 0 -> 1

**Nav link styles:**
- Font: DM Sans, 18px, weight 300
- Color: white (on dark backgrounds)
- Chevron: 18x18px SVG icon, white fill
- Dropdown links: body-font class, with "change-size" modifier
- Each dropdown link has a small chevron arrow on the right

### 4b. Hero Section (Home One)

This is the most complex section on the page with an overlapping layout:

```
Layer 1: .banner-section (charcoal bg, 770px tall)
  padding: 180px 15px 400px
  Contains:
    .middle-container (1230px, flex row, space-between, align-center, gap 60px)
      LEFT: H1 "Legalix fights For Your Justice." (700px wide, 190px tall)
        - "Justice." wrapped in <span> with gold color
      RIGHT: .button-and-text-wrapper (362px wide, 187px tall)
        - Body paragraph (gray text)
        - Gold CTA button "Ask For Consultation"
    
    Decorative flower image (absolute positioned, 110x119px, z-index:0)

Layer 2: .large-img-container (position: relative, starts at Y=470)
  Contains:
    .home-one-banner-wrapper (margin-top: -300px, overflow: hidden, z-index: 2)
      - Large hero image (full width, ~855px container)
      - .large-text "Legalix" (position: absolute, bottom: 0, left: 0)
        font: 19rem/15rem Playfair Display, color: #f9f8f5
        This creates the massive watermark effect overlapping the hero image
```

**The overlap trick:** The banner section has 400px bottom padding. The image container below uses -300px top margin to pull itself up into that padding space, creating the overlapping hero image effect. The watermark text sits at the absolute bottom of this container.

**Animations on hero elements:**
- H1: starts at translate3d(0, 0, 0) opacity 1 (appears to load immediately or with a very fast entrance)
- Button wrapper: starts at translateY(20px) opacity 0, animates to translateY(0) opacity 1 (scroll/load triggered)
- Banner wrapper: same reveal pattern
- All use `transform-style: preserve-3d` for GPU acceleration

### 4c. Stats/Counter Section

```
Layout:
.counter-section (padding: 116px 15px 126px)
  Row 1: flex row, gap 109px
    LEFT: .counter-section-flower-image (display: none on desktop -- only shows on tablet/mobile)
    RIGHT: .counter-section-heading (789px wide)
      H2: "Elevating brands through inspired communication and Legal Solutions"
        - "Elevating brands" in gold <span>
        - 70px Playfair Display, color: #47414f
      P: body text, padded 15px top/bottom, max-width constrained (685px)
  
  Row 2: flex row, space-between, gap 30px, margin-top 30px
    4 stat items side by side:
      H3: "75+" / "15+" / "18+" / "500+" (85px Playfair Display, #47414f)
      P: "Clients" / "Awards" / "Attorneys" / "Solved Cases" (18px DM Sans)
    Stats are separated by vertical dividers (implied by space-between layout)
```

**Key:** The stats numbers use H3 tags at 85px (same as H1!) which is unconventional but effective for visual impact.

### 4d. Two-Image Content Section

```
.two-img-section (padding: 127px 15px 128px, white bg)
  Container: flex row, space-between, gap 30px, 1230px wide

  LEFT COLUMN (.two-img-section-left, 600px):
    flex column, gap 55px
    H2: "Legalix Protects Your Rights, Every Step of the Way"
      - "Protects" in gold <span>
      - 70px Playfair Display
    .image-main.overflow-hidden (CSS Grid, 600x484px)
      IMG: "Meeting Two" photo
      .image-overlay (gold bg, animated reveal on scroll)

  RIGHT COLUMN (.two-img-section-right, 516px):
    .two-image-section-wrapper (flex column, gap 25px)
      .image-main.overflow-hidden (516x590px)
        IMG: "Lawyer" photo  
        .image-overlay (gold bg, animated reveal)
      P: first paragraph (516x90px)
      P: second paragraph (516x90px)
```

**Image overlay animation:** Each image has a `.image-overlay` div (gold background) that slides in/out as a reveal effect. Initial state: `height: 0px; translateY(0%)`. On scroll into view, the overlay slides to `translateY(100%)` creating a gold curtain wipe reveal effect. The overlay sits in the same grid cell as the image.

### 4e. Practice Areas Toggle List

```
.toggle-section-heading (flex row, justify center, gap 16px, padding-bottom 50px)
  .toggle-heading-wrapper (736px wide, 160px tall)
    H2: "Legal Solutions Tailored to Your Needs" (center aligned)
      - "Your" in gold <span>

.toggle-menus (padding-bottom: 180px)
  .w-dyn-list (full width, 786px tall)
    6 items, each:
      a.toggle-iteams-wrapper (full width link, padding: 40px top/bottom)
        border-bottom: 1px solid rgba(0,0,0,0.3)
        Background: transparent (hover changes to gold tint)
        
        .toggle-iteam (flex row, space-between, align center, max-width 1260px, centered)
          LEFT: number label "01" (gold, DM Sans 15px)
          CENTER: H4 practice area name (Playfair Display, 30px, #47414f)
          RIGHT: arrow chevron icon (SVG)
```

**Hover behavior:** `.toggle-iteams-wrapper` on hover changes background-color to transparent (from the animated gold). The data-w-id on each row suggests Webflow IX2 handles the hover animation. Each row is a link to the practice area detail page (e.g., /practice-areas/criminal-law).

**Spacing:** 40px padding top/bottom per row = 80px between rows. Bottom border creates visual separation.

### 4f. Why Choose Us Section

```
.why-choose-sectipon (bg: #47414f, padding: 120px 15px)
  Container: flex row, gap 80px, 1230px

  LEFT (.why-choose-left-section, 535px, position: relative):
    Decorative flower (absolute, 145x138px, top-right area)
    .why-choose-left-section-wrapper (flex column, gap 20px, max-width 490px)
      H2: "Why We Are The Best" (color: white, 70px Playfair)
      P: description text (color: #c1c1c1)
      .range-iteams-wrapper.margin-top-thirty (flex column, gap 5px, margin-top 30px)
        3 progress bar items:
          "Corporate Law" -- 87%
          "Property Law" -- 60%  
          "International Law" -- 87%

  RIGHT (.why-choose-right-section, 615px):
    .image-main.overflow-hidden (615x668px, CSS Grid)
      IMG: "Showing" (law office photo)
      .image-overlay (gold bg, scroll-triggered reveal)
```

**Progress bars:**
```css
.range-background {
  background-color: #c2b69733;  /* gold at 20% opacity */
  height: 4px;
  display: flex;
  overflow: hidden;
}
.main-range-seeking-button {
  background-color: #c2b697;    /* solid gold */
  height: 2px;
  width: 87%;                   /* varies per item */
}
```
Progress bars are thin (4px track, 2px fill) -- very subtle and elegant. The fill width matches the percentage label.

### 4g. Team Gallery

```
.gallery (padding: 100px 0 120px)
  Container: 1230px centered, overflow hidden
  
  Heading area:
    H2: "Dedicated To Your Defense, Introducing Our Dynamic Legal professionals"
      - "professionals" in gold <span>
    
  .team-gallery-main (flex row, centered, 1230px max, 1100px tall)
    5 team member cards in a staggered grid layout:
    
    Layout is NOT a simple grid. It's 5 collection lists stacked/offset:
    - Each team member is in its own w-dyn-list
    - Cards overlap vertically creating a masonry-like stagger
    - Photos are dark, moody professional portraits
    
    Each card shows:
      - Large photo (varied sizes, dark toned)
      - Name overlay: Playfair Display heading
      - Title: gold colored text (DM Sans)
```

**Team names visible:** Charles Merd (Criminal Lawyer), Elizabeth Henley (Family Lawyer), Ronald Huth (Personal Injury Lawyer), Robert Marx (Administrative Law), Diane Haar (Family Lawyer)

**The staggered layout** is the visual centerpiece -- cards are intentionally misaligned vertically to create an editorial magazine feel. Row 1 has 3 cards (left, center lower, right higher). Row 2 has 2 cards offset.

### 4h. Testimonials Slider

```
.slider-section (padding-bottom: 130px, overflow: hidden)
  .slider-wrapper (1230px centered, relative position)
    
    H2: "Hear what our past clients say"
    
    Carousel (Webflow native slider):
      .mask (width: 58.5%, overflow: visible)
      
      Each slide (.slider.slider-iteams):
        - Badge: "Trusted Platform" (gold label text)
        - Quote: body paragraph text
        - Avatar: small circular photo
        - Name + case type
      
      Navigation: single "next" arrow button with SVG icon
      8 slides total (1 of 8)
```

**Slider mechanics:** Uses Webflow's native slider component. The mask width of 58.5% means you see roughly 1.7 slides at a time, with the next card peeking in from the right edge -- a deliberate "peek" effect that invites interaction.

### 4i. Footer

```
.footer (bg: #2a2e31, padding-top: 120px, border-bottom: 1px solid black)
  
  .footer-iteam-wrapper (padding-bottom: 115px, padding-left/right: 15px)
    .center-container (1230px centered)
      4-column layout:
      
      Column 1 (.nav-first-section, 300px, flex column, gap 35px):
        - Logo (SVG, 95x30px) 
        - H2: "Let Us Help You Win Your Case" (Playfair Display, off-white)
        - Gold CTA button: "Ask For Consultation"
      
      Column 2 (.nav-second-section, ~153px):
        Practice area links (DM Sans, #c1c1c1):
        Business Law, Education Law, Family Law
      
      Column 3: 
        More links: Real Estate Law, Criminal Law, Insurance Defence
      
      Column 4 (contact info):
        - License link
        - Address: 410 Sandtown, California 94001, USA
        - Email: info@example.com

  .social-links-footer-section (padding: 21px 15px 15px)
    .center-container (1230px centered, flex row, space-between)
      LEFT: Social icons (Facebook, Twitter, LinkedIn, Instagram) -- gap 15px
      RIGHT: "Designed by RadiantTemplates. Powered by Webflow"
```

**Footer link styles:** DM Sans, 16px (estimated), weight 300, color #c1c1c1. No underlines. Footer heading uses Playfair Display.

---

## 5. Button Styles

### Primary Button (.main-button)

```css
.main-button {
  background-color: #c2b697;          /* gold */
  color: #2a2e31;                     /* charcoal text */
  letter-spacing: 0.15rem;            /* 2.4px */
  text-transform: uppercase;
  border: 1px solid #c2b697;
  flex: none;
  justify-content: center;
  padding: 12px 35px;
  font-family: "DM Sans", sans-serif;
  font-size: 0.9375rem;              /* 15px */
  font-weight: 600;
  line-height: 1.875rem;             /* 30px */
  transition: all 0.5s;
  border-radius: 0px;                /* sharp corners */
}

.main-button:hover {
  border: 1px solid #c2b697;
  color: #c2b697;                    /* text becomes gold */
  background-color: transparent;     /* bg goes transparent */
  border-radius: 0;
}
```

**Computed dimensions:** 297px wide, 56px tall (for "Ask For Consultation" text)

### Variant: Dark Border Button (.main-button.border-black)

```css
.main-button.border-black {
  border: 1px solid #47414f;         /* purple border instead of gold */
}
.main-button.border-black:hover {
  border-color: #fdfdfd;
  color: #fdfdfd;                    /* white on hover */
}
```

### Tailwind Implementation

```tsx
// Primary button
<button className="bg-gold text-charcoal uppercase tracking-[0.15rem] font-semibold text-[15px] leading-[30px] px-[35px] py-3 border border-gold font-dm-sans transition-all duration-500 hover:bg-transparent hover:text-gold">
  Ask For Consultation
</button>
```

---

## 6. Animation & Interaction Catalog

### 6a. Scroll-Triggered Reveal (Most Common)

Pattern applied to nearly every content element (headings, paragraphs, images, progress bars):

```
Initial state: transform: translate3d(0px, 20px, 0px); opacity: 0;
Final state:   transform: translate3d(0px, 0px, 0px); opacity: 1;
```

This is a simple "fade up" -- elements start 20px below their final position and invisible, then animate to their resting position when scrolled into view. Applied to:
- All H2 headings
- Body paragraphs
- Button/text wrappers
- Image wrappers
- Progress bar groups
- Individual progress bar items

### 6b. Image Gold Curtain Reveal

Applied to every `.image-main.overflow-hidden` container:

```
Container: CSS Grid (1 column), overflow: hidden
Layer 1: IMG (auto-fit, full width)
Layer 2: .image-overlay (bg: gold)

Initial state: overlay height: 0px, translateY(0%)
Scroll trigger: overlay animates to translateY(100%) -- slides DOWN to reveal image
Reset: overlay returns to height: 0, translateY(0%) when scrolled away

The overlay also has width set to match the image dynamically.
```

This creates a luxurious gold curtain that wipes down over the image as you scroll past, revealing it beneath.

### 6c. Header Hide/Reveal

```
Scroll down: header transforms translateY(-100%) -- slides off screen up
Scroll up: header transforms translateY(0%) -- slides back down
Uses will-change: transform for performance
```

### 6d. Dropdown Menu Animation

```
Trigger: hover (data-hover="true", 500ms delay)
Chevron: rotates (rotateZ) on open
Dropdown list: height 0% -> auto, opacity 0 -> 1
Mega menu (Pages): translateY(-20px) -> 0, opacity 0 -> 1, display none -> block
```

### 6e. Practice Area Row Hover

```
.toggle-iteams-wrapper hover:
  background-color animates to a gold tint
  Transition: 0.5s via the Webflow IX2 system
```

### 6f. Button Hover

```
.main-button transition: all 0.5s
  bg: gold -> transparent
  text: charcoal -> gold
  Border stays gold
```

### Implementing Animations in Next.js

For the scroll-triggered reveals, use Framer Motion's `useInView` or Intersection Observer:

```tsx
// Reusable fade-up component
const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "translateY(0px)" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
```

For the gold curtain image reveal, use a similar approach with translateY on the overlay.

---

## 7. Container & Spacing System

### Container Widths

| Container | Max Width | Horizontal Padding | Centering |
|-----------|-----------|-------------------|-----------|
| Main content | 1230px | 15px sides | margin: 0 90px (at 1440 viewport) |
| Toggle items | 1260px | 15px sides | auto margin |
| Full-bleed sections | 100% | 15px sides | -- |

### Section Vertical Padding

| Section | Padding Top | Padding Bottom |
|---------|------------|----------------|
| Hero banner | 180px | 400px |
| Counter/Stats | 116px | 126px |
| Two-image content | 127px | 128px |
| Toggle heading | 0px | 50px |
| Toggle menus | 0px | 180px |
| Why Choose Us | 120px | 120px |
| Team Gallery | 100px | 120px |
| Testimonials | 0px | 130px |
| Footer | 120px | 0px |
| Footer inner | 0px | 115px |
| Social bar | 21px | 15px |

### Inner Spacing Patterns

| Context | Spacing | Property |
|---------|---------|----------|
| Two-column main gap | 80px | flex gap |
| Two-column tight | 30px | flex gap |
| Counter heading area | 109px | flex gap |
| Image + text stack | 55px | flex gap |
| Right column images + text | 25px | flex gap |
| Toggle section -> list | 16px | grid gap |
| Toggle rows | 40px top + 40px bottom | padding |
| Why Choose text stack | 20px | flex gap |
| Progress bars stack | 5px | flex gap |
| Footer columns | 30px | grid gap |
| Footer CTA stack | 35px | flex gap |
| Heading to subtext | 15px | padding-top/bottom |
| Margin before progress bars | 30px | margin-top |

### General Rules
- **~120px** is the standard section vertical padding
- **30-60px** is the standard horizontal gap between flex columns
- **15-25px** is the standard gap within stacked elements
- Padding is always generous -- nothing feels cramped
- 15px horizontal page padding is universal

---

## 8. Image Strategy

### Image Types Used

1. **Hero image** -- Full-width, dark-toned professional group meeting photo. Overlaps banner section via negative margin.
2. **Content images** -- Dark, desaturated professional photos in rectangular containers with gold overlay reveal
3. **Team portraits** -- Dark, moody headshots. Varied sizes in staggered grid layout.
4. **Decorative flowers** -- Small botanical/dried flower images used as accent elements, absolutely positioned (110x119px, 145x138px). At least 3 instances on the page.
5. **Icons** -- SVG chevrons (18x18), arrows, social media icons

### Image Overlay Component

Every content image uses the same pattern:
```html
<div class="image-main overflow-hidden">
  <img class="auto-fit image-full-width" src="..." />
  <div class="image-overlay"></div>  <!-- gold bg, animated -->
</div>
```

CSS Grid stacks them in the same cell. The overlay is `position: relative` with gold bg, animated via Webflow IX2.

### Photography Style
- Dark, desaturated tones matching the charcoal/purple palette
- Professional settings (offices, courtrooms)
- Serious, authoritative mood
- No bright or saturated colors in photos

---

## 9. What Makes This Design Feel Premium

### Visual Rhythm
The page alternates between dark (charcoal/purple) and light (white) sections, creating strong visual beats. The progression is: dark hero -> light stats -> light content -> light toggle -> dark "why us" -> light gallery -> light testimonials -> dark footer.

### Restraint
- Only 2 fonts
- Only 6 colors (3 dark/neutral, 1 gold accent, 2 grays)
- Zero border-radius (everything is sharp/angular)
- No bold text (max weight 600, only on buttons)
- Headings are weight 400 -- they rely on size alone for impact
- Body text is weight 300 (light) -- deliberately airy

### Overlapping Layouts
The hero image breaking out of its section boundary (via negative margin) is the most impactful spatial trick. It creates a sense of depth and editorial sophistication that a flat, contained layout cannot achieve.

### Watermark Typography
The 304px Playfair Display text ("Legalix") at near-white opacity behind the hero image is a magazine-editorial technique. It fills dead space, adds brand presence, and creates visual texture without competing with readable content.

### Gold Accent Discipline
Gold (#c2b697) appears in exactly 5 contexts: buttons, accent words in headings, progress bars, image overlay reveals, and subtle background tints. It never appears in body text, borders (except buttons), or primary backgrounds. This restraint is what makes it feel expensive.

### Generous Whitespace
120px section padding, 55-109px gaps between elements. The page could easily be 40% shorter if the spacing were compressed. The space is the luxury.

### Animation Subtlety
Every animation is the same simple pattern: 20px translateY + fade. No bounces, no rotations, no complex keyframes. The gold curtain reveal on images is the only "fancy" effect, and even that is just a linear translateY. Restraint in animation prevents the design from feeling gimmicky.

---

## 10. Implementation Checklist for Next.js + Tailwind

### Fonts
- [ ] Load Playfair Display (400 weight only) from Google Fonts
- [ ] Load DM Sans (300, 600 weights) from Google Fonts
- [ ] Set body font to DM Sans 300

### Colors
- [ ] Define all 6 core colors + alpha variants in tailwind.config
- [ ] Create utility classes for gold accent spans

### Layout
- [ ] Max-width 1230px container component with 15px horizontal padding
- [ ] Full-bleed section wrapper that extends bg color to edges

### Components to Build
- [ ] `<FadeUp>` -- scroll-triggered translateY(20px) + opacity reveal
- [ ] `<ImageReveal>` -- grid-stacked image + gold overlay curtain animation
- [ ] `<SectionWrapper>` -- full-width section with centered content container
- [ ] `<GoldAccent>` -- span wrapper for gold-colored words in headings
- [ ] `<PracticeAreaRow>` -- numbered toggle row with border-bottom and hover
- [ ] `<ProgressBar>` -- thin 4px track with gold fill
- [ ] `<TeamCard>` -- photo with name/title overlay, variable sizing for stagger
- [ ] `<TestimonialSlider>` -- carousel with 58.5% mask width peek effect
- [ ] `<Button>` -- gold primary with hover-to-transparent transition
- [ ] `<WatermarkText>` -- absolute positioned giant Playfair Display text
- [ ] `<Header>` -- fixed, transparent, hide-on-scroll-down/show-on-scroll-up
- [ ] `<Footer>` -- 4-column layout with CTA, links, contact, social

### Responsive Notes
- Container switches from 1230px max to fluid below ~1260px
- 15px horizontal padding is universal
- Hero watermark text (304px) will need major scaling or hiding on mobile
- Toggle rows should stack label + heading vertically on mobile
- Team gallery stagger becomes single column on mobile
- Header collapses to hamburger menu on medium breakpoints

---

## Raw Data Files

All extracted JSON files are in the `projects/stillman-legal/` directory:
- `legalix-sections.json` -- all section elements with computed styles
- `legalix-deep-sections.json` -- deep section analysis with child details
- `legalix-hero.json` -- hero section HTML and styles
- `legalix-nav.json` -- navigation HTML and structure
- `legalix-buttons.json` -- all button computed styles
- `legalix-typography.json` -- type scale for all HTML elements
- `legalix-animations.json` -- elements with transitions/animations
- `legalix-wf-interactions.json` -- Webflow IX2 data-w-id elements
- `legalix-scroll-effects.json` -- scroll-triggered state changes
- `legalix-head-info.json` -- meta tags, font URLs, script URLs
- `legalix-stylesheets.json` -- stylesheet sources
- `legalix-webflow.css` -- full Webflow CSS (248,668 chars)
- `legalix-axtree.txt` -- accessibility tree
- `legalix-fullpage.png` -- full page screenshot
- `legalix-home1-scroll-{0-6000}.png` -- viewport screenshots at 600px intervals
