# Legalix Webflow Template -- Detailed Page Analysis

Analysis date: 2026-04-08
Source: https://legalix.webflow.io/
Screenshots saved alongside this file as `legalix-{pagename}.png`

---

## Global Design System

Before diving into individual pages, here are the constants that repeat across every page.

### Color Palette
- **Dark green/charcoal (primary dark):** `rgb(42, 46, 49)` -- used for headers, hero banners, footers
- **Muted purple/mauve (secondary dark):** `rgb(71, 65, 79)` -- used for testimonial sections, alternate dark sections, contact hero
- **Gold/tan accent:** `rgb(194, 182, 151)` / `rgba(194, 182, 151, 0.1)` -- CTA buttons, hover states, highlight boxes, decorative elements
- **White:** `rgb(255, 255, 255)` -- content sections
- **Off-white:** `rgb(253, 253, 253)` -- blog sections
- **CSS variables used:** `--first-color` (gold), `--h1-color`, `--top-heading-text-color`

### Typography
- Body text uses `.body-font` class throughout
- Headings are serif (visible in screenshots -- likely a Playfair Display or similar)
- Body text is sans-serif
- Section labels ("About uS", "Practice Area", "Contact US") use a smaller uppercase/small-caps treatment above the main heading

### Container System
- **Max width:** 1230px (`.center-container`, `.w-container`)
- **Wider variant:** 1260px (`.middle-container-width-increase`)
- **Section padding:** Consistently `120-130px` vertical, `15px` horizontal
- **Full-bleed sections** use 1440px width with no side padding

### Decorative Elements
- **Flower/botanical SVG ornaments** appear on multiple pages -- small decorative images positioned absolutely
- **Large ghost text** (massive, low-opacity text like "About", "Practice", "Contact", "Details", "Team") sits behind sections as a watermark/design element. These use classes like `practice-details-page-large-text-wrapper` and are oversized (1410-1535px wide)
- **Vertical border separators** between flex columns (1px, 0.2-0.3 opacity white or black)

### Footer (shared across all inner pages)
- Background: `rgb(42, 46, 49)` (dark charcoal)
- Height: ~599px total (415px content + 63px bottom bar + padding)
- Layout: CSS Grid `2fr 1fr 1fr` via `.home-one-main-nav-wrapper`
  - **Column 1 (2fr):** Logo, tagline paragraph, "Ask For Consultation" CTA button
  - **Column 2 (1fr):** Practice area links (Business Law, Education Law, Family Law, Real Estate Law, Criminal Law, Insurance Defence, License)
  - **Column 3 (1fr):** Address + email + decorative flower image
- Bottom bar: "Designed by RadiantTemplates. Powered by Webflow" with social icons (Facebook, Twitter, LinkedIn, Instagram)
- Footer links hover: color transitions to gold (`--first-color`)

### Navigation (shared -- "header-one" variant)
- Transparent/dark background sitting on top of hero
- Logo left, nav links center, social icons + "Call" CTA button right
- Dropdown menus with Webflow interactions (w-id animations): chevron rotation, height/opacity transitions
- Mega menu for one dropdown (`.megamenu` class, transform: translate3d animated)
- Nav gap: 15px between items
- Sticky behavior with `will-change: transform` applied

### Hover Effects (global)
- **CTA buttons:** On hover, border becomes gold outline, text becomes gold, background goes transparent, border-radius snaps to 0px
- **Footer links:** Color transitions to `--first-color` (gold) on hover
- **Images with border-radius:** Radius animates to 0px on hover (rounded corners become sharp)
- **"Read more" links:** `transform: translate(15px)` -- slides right on hover
- **Blog items:** `transform: translate(15px)` slide right
- **Menu links:** `transform: translate(10px)` slide right
- **Slider arrows:** Background becomes gold on hover
- **Dynamic items (cards):** Background becomes `rgba(194, 182, 151, 0.1)` with gold border on hover

### Webflow Interactions (Animations)
- All pages use `data-w-id` attributes for Webflow IX2 interactions
- Common patterns: dropdown open/close (height 0% to auto, opacity 0 to 1), mega menu reveal (translateY from -20px to 0)
- Hero sections likely have scroll-triggered entrance animations (will-change: transform is set)

---

## 1. Home Two (`/home-two`)

**Screenshot:** `legalix-home-two.png`

### How it differs from Home One
Home Two uses a completely different header style (`.header-two` with `rgb(71, 65, 79)` purple background instead of transparent) and a different hero layout. Where Home One likely uses a full-screen dark hero, Home Two uses a lighter approach with a tan-tinted background image and overlapping photo compositions.

### Section Order (top to bottom)

| # | Section | Background | Height | Key Details |
|---|---------|-----------|--------|-------------|
| 1 | **Hero banner** `.ful-header-banner-section` | `rgba(194, 182, 151, 0.1)` with bg image | 976px | Light tan tint. "Empowering You with Legal Insights" heading. CTA button. Overlapping photos of attorneys -- one standing figure in black suit overlapping a seated group photo. pad: 120px top, 0 bottom (content bleeds down) |
| 2 | **Value props** `.black-section` | `rgb(42, 46, 49)` dark | 753px | "Great past results for clients with expertise" heading. Three value prop cards in a flex row (`.three-section-wrapper`, 3 children): Fast turnaround, Free consultation, 100% Trusted winning. Each card has icon + title + description. |
| 3 | **Protection/About** `.proctection-section` | White | 932px | "Legalix Protecting Your Rights, Every Step of the Way" -- two-column layout. Left: large image (648px tall, `.protection-section-image-wrapper`). Right: text content stack with heading, paragraph, "Free Consultation" CTA, and bullet/feature list. |
| 4 | **Case Results** `.client-section` | White | 909px | "Great past results for our clients" with CTA. Two large case result cards side by side: $46,000,000 Corporate & compliance, $12,000,000 Company acquisition. Each card has big dollar amount, category, and description paragraph. Pricing section is 90px tall per card. |
| 5 | **Legal Insights** `.only-one-img-section` | Transparent | 958px | "Legal Insights for Every Case" -- single large image with decorative flower ornament (146px). Long-form text block. |
| 6 | **Testimonials** `.person-information-section` | `rgb(71, 65, 79)` purple | 838px | "Our clients speak: Stellar reviews, real results" -- two-column: left has heading + testimonial quote text + attribution, right has large portrait image (578px tall). |
| 7 | **Blog** `.blog-section` | `rgb(253, 253, 253)` off-white | 1268px | Three blog posts in vertical stack. Each has `.posted-section` with author avatar + name + date, then title, excerpt, and "Read More" link. Blog items slide right on hover. |
| 8 | **Footer** `.home-two-footer` | Transparent | 568px | Different footer variant than inner pages -- uses `.footer-second-and-third-section` flex row with two link columns. |
| 9 | **Bottom bar** `.promotion-section` | Transparent | 66px | Credits |

### Unique Components
- **Overlapping hero photos** -- multiple images composited in the hero, not a single background
- **Large dollar amount case results** -- big number typography for case wins
- **Vertical blog post stack** -- instead of card grid, posts are listed vertically with horizontal layouts
- **Different footer variant** -- simpler than the grid footer on inner pages

---

## 2. About One (`/about-one`)

**Screenshot:** `legalix-about-one.png`

### Section Order (top to bottom)

| # | Section | Background | Height | Key Details |
|---|---------|-----------|--------|-------------|
| 1 | **Hero banner** `.about-one-banner-section` | `rgb(42, 46, 49)` dark | 896px | "About uS" small label above "We Protect Your Legacy" heading. Two-column flex (`.about-banner-section-wrapper`): Left (596px) has label + heading + paragraph + CTA button. Right (614px) has full-height image of attorney at desk. Small decorative icon (101x94px) positioned between columns. Giant ghost text "About" (1535px wide) partially visible behind content. Bottom of hero has overlapping image bleeding into next section. |
| 2 | **Mission** `.mission-section` | White | 944px | "Our mission Is To Fight For The Rights." -- flex column layout. Top: heading (800px wide). Bottom: two-column flex row. Left column (555px): subtitle "The legal team that acts like one" + long paragraph. Right side: 2x3 grid (`.bullet-point-points-section-wrapper`, grid: `192px 192px`) of practice area tags (Immigration Laws, Traffic Violence, Litigation, Violence Family, DUI Defense, Crimes) + large image. Decorative flower image (130x121px). pad: 167px top, 130px bottom. |
| 3 | **Clarity** `.clarity-section` | White | 671px | "Bringing Clarity to Legal Complexity" -- two-column flex row (1260px container). Left (667px): flex column with heading + paragraph text wrapped in `.writting-section-right-content-wrapper` (500px wide, 551px tall). Right (667px): large image. |
| 4 | **Protecting Rights** `.protecting-section` | `rgb(71, 65, 79)` purple | 740px | "Protecting Your Rights, Every Step of the Way" -- centered heading + paragraph in a flex column (`.heading-and-text-wrapper`, 240px tall). Heavy bottom padding (400px) suggesting an overlapping element from the next section sits on top. |
| 5 | **Locations Slider** `.about-one-slide-section` | Transparent, overflow-hidden | 1037px | "Our Locations" heading + description. Horizontally scrolling location cards. Each location has: `.information-content` (304px wide, 365px tall) with city name, address fields (Address, Email, Phone), plus `.full-width-image-container` (495x546px) with city photo. Three locations shown: California, New York, San Francisco. pad: 110px top, 120px bottom. |
| 6 | **Footer** | Dark charcoal | 599px | Standard grid footer |

### Unique Components
- **Giant ghost text "About"** watermark behind hero (1535px wide, very faint)
- **2x3 practice area tag grid** in mission section
- **Location slider** with info card + large city photo pairs -- horizontally scrollable carousel
- **Overlapping section trick** -- protecting-rights section has 400px bottom padding so the locations section's content overlaps upward into the purple area

---

## 3. Practice Area Listing (`/practice-area-one`)

**Screenshot:** `legalix-practice-area-one.png`

### Section Order (top to bottom)

| # | Section | Background | Height | Key Details |
|---|---------|-----------|--------|-------------|
| 1 | **Hero banner** `.about-page-two-banner-section.background-color-dark-green` | `rgb(42, 46, 49)` | 989px | "Practice Area" small label. "Defending Your Rights, Delivering Peace of Mind" heading. Paragraph below (705px max width). CTA button. Large ghost text "Practice" (1410px wide). Hero bleeds into a two-image section below. |
| 2 | **Two images** `.practice-page-one-two-image-section` | Transparent | 707px | Full-width image pair in `.images-wrapper` flex row (1230px). Two side-by-side photos spanning the width. This section overlaps the bottom of the hero, creating a seamless visual transition. Bottom padding: 130px. |
| 3 | **Practice areas list** `.practic-page-one-practice-section.background-color-white` | White | 1727px | "Explore The Perfect Our Practice Areas" heading. Below: 6 practice area items in a vertical stack. Each item (`.toggle-content-wrapper`) is a flex row, 1260px wide, 150px tall, containing: numbered index (01-06), practice area name, description text, and a link. Areas listed: Criminal Law, Real Estate Law, Tax Law, Family Law, Business Law, Intellectual Property. |
| 4 | **Footer** | Dark charcoal | 599px | Standard |

### Practice Area List Layout Details
- **NOT a card grid** -- this is an accordion/list style, one item per row
- Each `.toggle-content-wrapper` is a horizontal flex row at 1260px wide, 150px tall
- Content appears to be: number (left) | title (center-left) | description (right) | arrow/link (far right)
- Items have horizontal dividers between them (visible in screenshot)
- On hover, items likely get the gold background tint + border (based on `.dynamic-iteams:hover` rule)
- The number formatting uses "01", "02", etc. style

### Unique Components
- **Numbered accordion-style list** -- very different from typical card grids
- **Two overlapping hero images** that bridge the dark hero and white content
- **Ghost text "Practice"** as watermark

---

## 4. Practice Area Detail -- Business Law (`/practice-areas/business-law`) -- CRITICAL

**Screenshot:** `legalix-business-law.png`

### Section Order (top to bottom)

| # | Section | Background | Height | Key Details |
|---|---------|-----------|--------|-------------|
| 1 | **Hero banner** `.practic-area-four-banner-section` | `rgb(71, 65, 79)` purple | 948px | "Business Law" H1 heading + description paragraph. Two-column flex top section: left (800px) has heading + text, right (431px) has "Ask For Consultation" CTA button. Ghost text "Details" (1410px wide, 288px tall). Below: full-width hero image (1273x656px) of attorney holding document. |
| 2 | **Article content** `.details-page-article-section` | White | 3049px | THE MAIN CONTENT AREA. Full-width layout (no sidebar). |
| 3 | **Footer** | Dark charcoal | 599px | Standard |

### Content Area Deep Dive (THE CRITICAL PART)

The practice area detail page uses a **FULL-WIDTH single-column layout with NO sidebar**. All content is centered in a 1230px container. Here is the exact structure from top to bottom:

#### Content Structure
```
.details-page-article-section (white bg, pad: 30px 0 28px)
  .blog-container-background-color (white bg, 3139px tall)
    .center-container.margin-top (1230px wide, centered)
      .practice-area-details-article-wrapper (1230px)
        1. .title-wrapper (952px wide, 185px tall)
           - H2: "Unraveling Real Estate Legalities for You"
        
        2. .margin-buttom-for-first-section.w-richtext (1230px, 445px tall)
           - Body paragraphs of lorem ipsum text
        
        3. .highlight-section (1230px, 595px tall)
           - Background: rgba(194, 182, 151, 0.1) -- GOLD TINT BOX
           - "Article at a Glance:" label
           - Bullet list content (UL with 6 items)
           - Ordered list content (OL with 3 items)
        
        4. .margin-buttom-for-third-section.w-richtext (1230px, 1163px tall)
           - H4: "It was great to meet some new faces"
           - More body paragraphs
           - Inline image (1230x478px -- wide photo of people watching)
           - H4: "Critical Things To Consider When Optimizing Webflow"
           - More paragraphs
           - Another ordered list (3 items)
           - Another unordered list (2 items)
        
        5. .highlight-section.margin-buttom-thirty (1230px, 265px tall)
           - Background: rgba(194, 182, 151, 0.1) -- GOLD TINT BOX
           - Second "Article at a Glance:" callout
           - List content
```

#### Key Design Patterns for Practice Area Content
1. **No sidebar whatsoever** -- content fills the full 1230px container width
2. **Title wrapper** is narrower (952px) than content (1230px), creating a slight left-alignment
3. **Rich text sections** use Webflow's `.w-richtext` class for styled body content
4. **Gold highlight boxes** (`.highlight-section`) break up the text -- light tan/gold background `rgba(194, 182, 151, 0.1)`, labeled "Article at a Glance:"
5. **Two highlight boxes** -- one after the intro paragraph, one at the bottom
6. **Mixed list types** -- both ordered (numbered) and unordered (bullet) lists within highlight boxes
7. **Inline full-width image** embedded within the rich text content
8. **H4 subheadings** break up long text sections
9. **No decorative flower images** on this page (they're hidden via `.display-off` class)

#### Content Length Breakdown
- Intro text block: ~445px tall
- First highlight box: ~595px tall
- Main body text: ~1163px tall (with embedded image)
- Second highlight box: ~265px tall
- **Total article content: ~3049px** (substantial long-form)

#### Images
- Hero image: `Business Law.webp` (1273x656px) -- attorney holding up legal document
- Inline image: `Watching.webp` (1230x478px) -- people in a meeting/office

#### Headings Hierarchy
- H1: "Business Law" (in hero)
- H2: "Unraveling Real Estate Legalities for You" (article title)
- H4: "It was great to meet some new faces" (subheading)
- H4: "Critical Things To Consider When Optimizing Webflow" (subheading)

---

## 5. Contact One (`/contact-one`)

**Screenshot:** `legalix-contact-one.png`

### Section Order (top to bottom)

| # | Section | Background | Height | Key Details |
|---|---------|-----------|--------|-------------|
| 1 | **Hero banner** `.contact-page-one-banner-section.responsive-overflow-off` | `rgb(71, 65, 79)` purple | 900px | Two-column hero. Left (552px): "Contact US" label + "Get in touch with us!" heading. Vertical border separator (1px, 0.2 opacity white). Right (357px): contact info stack -- address, email, phone with icons (`.personal-details-buttom-section`, 230px tall). Ghost text "Contact" (1410px wide, 352px tall). Below the text area: full-width image (1440px wide, 647px) of people in meeting. |
| 2 | **Contact form** `.contact-page-one-contact-form` | Transparent | 943px | "How we can help you" H2 heading (centered). Subtext "Fill up the form and we'll be in touch very soon". Webflow form (`.w-form`) at 1230px wide, 515px tall. Form container uses `.contact-one-form-container` flex column layout. |
| 3 | **Footer** | Dark charcoal | 599px | Standard |

### Contact Page Layout Details
- **NO embedded map** -- the page uses a large photo instead of a Google Map
- **Contact info is in the hero**, not in a separate section -- address, email, phone are displayed next to the heading
- **Contact info uses icon images** (message icon 22x18px, call icon 23x24px) not SVG inline icons
- **Form is full-width centered** -- no sidebar or split layout for the form
- **Ghost text "Contact"** as watermark behind the hero content
- **Very simple page** -- just hero with info + single full-width form + footer

### Form Structure
- Full-width form at 1230px in a flex column container
- Standard fields (name, email, message presumably -- extracted as Webflow form)
- Success/error messages built in ("Thank you! Your submission has been received!" / "Oops! Something went wrong")

---

## 6. Team Listing (`/our-team`)

**Screenshot:** `legalix-our-team.png`

### Section Order (top to bottom)

| # | Section | Background | Height | Key Details |
|---|---------|-----------|--------|-------------|
| 1 | **Hero banner** `.team-one-page-banner-section.overflow-hidden` | `rgb(42, 46, 49)` dark | 913px | Two-column flex. Left (562px): "Our TeaM" label + "We Protect Your Legacy" heading + paragraph + CTA button. Right (738px): large composite image of three attorneys (visible in screenshot -- formal studio shot with blonde woman center, man left, woman right). Ghost text "Team" (1146px wide, 350px tall). |
| 2 | **Team grid** `.gallery` | Transparent | 1600px | "Dedicated To Your Defense, Introducing Our Dynamic Legal Professionals" heading with "professionals" in gold/italic. Below: team member cards. |
| 3 | **Footer** | Dark charcoal | 599px | Standard |

### Team Card Layout Details

Each team member is a **linked card** (`.hero-project-one`, using `<a>` tag, `w-inline-block`):
- **Layout:** CSS Grid with `grid-template-columns: 350px`
- **Size:** 350px wide, 435px tall
- **Each card is a link** to the individual team member page
- **Cards arranged in a container** at 1230px wide (`.container-width.overflow-hidden`)

Based on 1230px container and 350px cards, this fits **3 cards per row** with gaps between them.

**5 team members shown:**
1. Charles Merd -- Criminal Lawyer (`.hero-project-one`)
2. Elizabeth Henley -- Family Lawyer (`.project-two`)
3. Ronald Huth -- Personal Injury Lawyer (`.project-three`)
4. Robert Marx -- Administrative Law (`.project-four`)
5. Diane Haar -- Family Lawyer (`.project-five`)

### Card Visual Treatment (from screenshot)
- **Dark overlay** on the photo by default -- image is dimmed/has dark gradient
- **Name and title** appear at bottom of card over the image
- **On hover:** likely reveals more info or changes overlay opacity
- **Image fills the entire card** (portrait photo)
- Each project variant has its own class (`.project-two`, `.project-three`, etc.) for potential individual styling

### Unique Components
- **Single gallery section** with linked portrait cards
- **Only 5 team members** displayed (2 rows: 3 + 2, or possibly different arrangement)
- **Ghost text "Team"** watermark

---

## 7. Team Detail -- Elizabeth Henley (`/team-details/elizabeth-henley`)

**Screenshot:** `legalix-team-details.png`

### Section Order (top to bottom)

| # | Section | Background | Height | Key Details |
|---|---------|-----------|--------|-------------|
| 1 | **Profile header** `.team-details-page-information-section` | `rgb(42, 46, 49)` dark | 912px | Two-column flex layout for bio card + portrait |
| 2 | **Article content** `.person-details-article-section` | White | 2565px | Full biographical content |
| 3 | **Footer** | Dark charcoal | 599px | Standard |

### Profile Header Deep Dive

The header uses `.person-details-page-wrapper` as a **flex row** (1230px):

**Left column** `.person-details-left-section` (550px wide, 712px tall):
- **Top section** `.personal-details-top-section` (550px, 443px, flex column):
  - "Family Lawyer" subtitle/label
  - **H1: "Elizabeth Henley"** (name as page heading)
  - **Key/value info pairs:**
    - Practice: Areas: Criminal Defence, Federal Attorney, DUI Defence, Expungements
    - Experience: [value]
  - **Social media links** (`.social-media-heading` + `.social-media-icons`): Facebook, Twitter, LinkedIn, Instagram icons as inline-block links
  
- **Bottom section** `.personal-details-buttom-section` (550px, 216px, flex column):
  - Email: info@example.com (with message icon 22x18px)
  - Phone: 888 456 7890 (with call icon 23x24px)
  - Address: 410 Sandtown, California 94001, USA

**Right column** `.person-details-right-section` (580px wide, 769px tall):
- Large portrait photo (601x797px) -- professional headshot of Elizabeth Henley
- Image bleeds below the dark section (769px in a 712px container = ~57px overflow creating overlap effect)

### Article Content Deep Dive

Full-width layout (1230px container, no sidebar), structured as:

```
.person-details-article-section (white bg, pad: 169px top, 130px bottom)
  .center-container (1230px)
    .article-content-wrapper (1230px, 2266px tall)
      
      1. "Personal experience & biography" section heading
         - Multiple paragraphs of biographical text
      
      2. "Professional Skill" section heading
         - Text about skills
      
      3. "Educational Experience" section heading
         - Text about education
      
      4. HIGHLIGHT BOX .highlight-section (1230px, 265px)
         - Gold tint bg: rgba(194, 182, 151, 0.1)
         - "Article at a Glance:" label
         - Bullet list content
      
      5. "Verdicts & Settlements" section heading
         - Text about cases
      
      6. "Organizations & Memberships" section heading
         - Text about memberships
      
      7. HONORS SECTION .honor-and-achivement-section (1230px, 386px, flex row)
         - Left column .top-section (391px, 386px):
           "Honors & Achievements"
           - 2018 CAL-ABOTA Trial Lawyer Of The Year
           - 2017 Trial Lawyer of the Year
           - Martindale-Hubbell AV Preeminent rating
         - VERTICAL DIVIDER .honor-and-achivement-section-border (1px, rgba(0,0,0,0.3))
         - Right column (implied):
           "Judiciary" 
           - Additional honors/judiciary info
      
      8. "Languages" section heading
         - Language proficiency info
```

### Key Design Patterns
1. **No sidebar** -- full 1230px width for all content, same as practice area detail
2. **Profile card in dark header** -- all contact/bio summary info lives in the dark hero section, not in a sidebar
3. **Portrait photo overlaps** sections (bleeds from dark into white)
4. **Social media icons** displayed with the profile info, not at the bottom
5. **Multiple H-level sections** organizing a long-form bio into discrete topics
6. **One gold highlight box** ("Article at a Glance") breaking up the text
7. **Honors split into two columns** with a vertical divider border -- left column for achievements, right for judiciary info
8. **Contact info uses icon images** (mail icon, phone icon) for visual treatment

### Unique Components
- **Profile header with image overlap** -- portrait extends beyond its dark container
- **Structured biography sections** (Personal, Professional Skill, Education, Verdicts, Organizations, Honors, Languages)
- **Two-column honors section** with vertical divider
- **Social links in profile header** (not just footer)

---

## Cross-Page Pattern Summary

### What makes this template look professional (not generic AI)

1. **Overlapping elements** -- images and sections deliberately bleed across boundaries (hero photos extending into content sections, portrait overlapping dark/white)
2. **Ghost text watermarks** -- giant, nearly-invisible text labels ("About", "Practice", "Details", "Contact", "Team") add depth
3. **Asymmetric layouts** -- hero sections use unequal column splits (552px/357px, 562px/738px, 596px/614px)
4. **Gold accent discipline** -- the tan/gold color is used sparingly (highlight boxes, hover states, CTA outlines) never as a primary fill
5. **Generous whitespace** -- 120-130px vertical padding on sections, content never feels cramped
6. **Hover interactions that feel physical** -- buttons lose their fill and radius, links slide sideways, images lose rounded corners
7. **Vertical rhythm** -- consistent section heights (700-1000px range) with bold typographic hierarchy
8. **Decorative botanical elements** -- small flower/plant SVGs add organic warmth to an otherwise corporate layout

### Layout Pattern by Page Type

| Page Type | Layout | Sidebar | Content Width |
|-----------|--------|---------|---------------|
| Homepage | Varied sections, full-width | None | 1230-1440px |
| About | Varied sections | None | 1260px |
| Practice Area Listing | Accordion list | None | 1260px |
| Practice Area Detail | Full-width article | **NONE** | 1230px |
| Contact | Hero info + form | None | 1230px |
| Team Listing | Card gallery | None | 1230px |
| Team Detail | Profile header + article | **NONE** | 1230px |

**Key takeaway: No page uses a sidebar.** Every page is full-width content. The template relies on section variety, background color alternation, highlight boxes, and image placement to create visual interest instead of sidebar widgets.

### Section Background Color Pattern

Most pages alternate between these backgrounds:
1. Dark charcoal hero (`rgb(42, 46, 49)`) or purple hero (`rgb(71, 65, 79)`)
2. White content sections
3. Occasional purple accent section for testimonials/highlights
4. Gold-tinted boxes (`rgba(194, 182, 151, 0.1)`) inline within content

The two dark colors serve different moods:
- **Charcoal** (`42, 46, 49`) = professional, authoritative (hero banners, footers)
- **Purple/mauve** (`71, 65, 79`) = warmer, more approachable (contact, testimonials, alternate heroes)
