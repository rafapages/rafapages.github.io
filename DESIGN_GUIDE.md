# Design Guide — rafapages.com

A reference for visual decisions across the site to keep things consistent.

---

## Fonts

| Role | Family | Weight | Notes |
|------|--------|--------|-------|
| Headings | **Bungee** | 400 | All section titles, page titles, nav name, stat numbers |
| Body | **Lato** | 300 / 400 / 700 | All body text, descriptions, subtitles |

Both loaded via a single Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Bungee&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

**Base size:** 15px, line-height 1.8 (set on `body` in `main.css`).

### Heading scale

| Class | Size | Font |
|-------|------|------|
| `.hero-name` | 5rem (desktop) / 1.9rem (mobile) | Bungee |
| `.section-title`, `.research-page-title` | 2rem | Bungee |
| `.research-section-title` | 1rem, uppercase, letter-spacing 0.04em | Bungee |
| Body / descriptions | 0.9–1.05rem | Lato 300 |
| Small / meta | 0.75–0.85rem | Lato 300 |

---

## Colours

### Core palette

| Name | Value | Usage |
|------|-------|-------|
| Near-black | `#111` | Primary text, headings, links |
| Body text | `#555` | Descriptions, bio text |
| Secondary text | `#999` / `#aaa` | Taglines, subtitles, section labels |
| Meta text | `#777` / `#888` | Abstracts, timestamps, awards |
| Brand blue | `#2d68f6` | Link hover, interactive accent |
| Yellow | `rgba(255, 220, 0, …)` | Highlight marker, featured-paper tint |
| White | `#fff` | Page backgrounds |
| Off-white | `#f5f5f5` / `#f0f0f0` | Dividers, card borders |

### What not to use

The site previously used `#1772d0` (academic blue) and `#f09228` (orange) from an old CV template — these are gone. The agency theme yellow (`#fed136`) is also a relic and should not be used.

---

## Links

All links hover to `#2d68f6`. The only difference between link types is their resting appearance.

### Inline text links
Used when a link is embedded within a paragraph (e.g. hero bio, research bio, research section).

```css
color: #111;
font-weight: 400;
border-bottom: 1px solid #ccc;
text-decoration: none;
transition: color 0.2s, border-color 0.2s;

/* hover */
color: #2d68f6;
border-color: #2d68f6;
```

The faint underline signals it's a link without interrupting reading. Both text and border go blue on hover.

### Action links
Used for standalone clickable items: CTAs, paper titles, nav links, contact links.

```css
color: #111;
text-decoration: none;
transition: color 0.2s;

/* hover */
color: #2d68f6;
```

### Paper resource pills
Used for per-paper resource links (PDF, Code, Project Page, etc.) on the research page. Rendered as small outlined pills in a flex row.

```css
/* container */
.paper-links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

/* each pill */
.paper-links a {
  font-size: 11px;
  color: #555;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 1px 9px;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;
}

/* hover */
color: #2d68f6;
border-color: #2d68f6;
```

### Footer links
Dimmed by default, darken on hover.

```css
color: #bbb;
/* hover */
color: #111;
```

---

## Yellow highlight marker

Used to draw attention to key words or phrases in headings and body text.

**HTML:**
```html
<mark class="highlight">key phrase</mark>
```

**Effect:** A hand-drawn yellow marker stroke across the bottom of the text. Defined in `main.css`:
```css
.highlight {
  background: linear-gradient(
    to right,
    rgba(255, 220, 0, 0.2),
    rgba(255, 220, 0, 0.7) 10%,
    rgba(255, 220, 0, 0.5)
  );
  background-repeat: no-repeat;
  background-size: 100% 40%;
  background-position: 0 88%;
  margin: 0 -0.4em;
  padding: 0.1em 0.4em;
  border-radius: 0.8em 0.3em;
}
```

### Featured paper highlight (research page)

Papers marked as featured use a light yellow tint block — same brand colour family as the marker:

```css
/* Card background */
.paper-item.paper-highlight {
  background: rgba(255, 220, 0, 0.08);
}

/* "Featured" label badge */
.paper-highlight-label {
  background: rgba(255, 220, 0, 0.35);
}
```

---

## Scribble dividers

Hand-drawn SVG doodles used as section separators. Drop a `.doodle-divider` between sections:

```html
<div class="doodle-divider">
  <img src="img/zigzag.svg" alt="">
</div>
```

Available SVGs in `img/`: `zigzag.svg`, `spring.svg`, `dashed.svg`, `wavy.svg`.

For a doodle above a section title, use `.section-doodle` on the `<img>` directly.

---

## What to avoid

- **Montserrat, Droid Serif, Kaushan Script, Roboto Slab** — leftovers from the agency theme, not part of the design.
- **`#1772d0` / `#f09228`** — old academic CV colours, replaced.
- **`#fed136`** — agency theme yellow, replaced by the rgba yellow system.
- **Opacity-fade hovers** (`opacity: 0.45`) — replaced with colour transitions to `#2d68f6`.
