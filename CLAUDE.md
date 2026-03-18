# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio and research showcase site for Rafael Pagés (CEO of Volograms), hosted on GitHub Pages at `www.rafapages.com`. Pure static HTML — no build system, no framework, no compilation step.

## Deployment

Push to `main` branch on GitHub. GitHub Pages serves the files directly. No build or deploy commands needed.

## Architecture

Three main HTML pages:
- `index.html` — Homepage with hero video, bio, and social links
- `research.html` — Academic publications list with hover video previews (long-form, ~1350 lines)
- `blocks.html` — Gallery/media showcase

**Styling:**
- `css/main.css` — Primary custom styles (responsive breakpoint at 768px, card hover effects, video wrappers)
- `css/stylesheet.css` — Research page styles (academic paper layout, link colors `#1772d0` → `#f09228`)
- `css/agency.css` — Agency portfolio theme base

**Vendor libraries** are stored locally in `vendor/` (Bootstrap 5, Font Awesome, jQuery, jQuery Easing). Font Awesome icons also load via CDN kit.

**Media assets:**
- `research/` — Per-paper `.jpg` thumbnails and `.mp4` preview videos
- `img/` — Site images and GIFs
- `vid/` — Standalone video files
- `*.usdz` — 3D volumetric models (large files, ~200MB total)

## Conventions

- All pages include Open Graph tags and JSON-LD structured data (Person + Organization schemas).
- Research paper cards in `research.html` follow a consistent pattern: video/image thumbnail, title link, authors, venue/year, description.
- Responsive design uses Bootstrap 5 grid. Custom mobile tweaks are in `css/main.css` under `@media (max-width: 768px)`.
