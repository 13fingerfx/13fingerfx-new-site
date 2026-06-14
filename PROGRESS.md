# 13 Finger FX Site Progress

## Current State

- Repo: `https://github.com/13fingerfx/13fingerfx-new-site`
- Local path: `/Users/DanMartin/Documents/New project/13fingerfx-new-site`
- Netlify URL: `https://13fingerfx.netlify.app`
- Branch: `main`
- Latest pushed commit at handover: `161dd1c Update footer SEO and contact forms`
- Hosting target: Netlify
- Domain target later: `13fingerfx.com`, currently managed through Squarespace/Tucows DNS

## Source Of Truth

Rebuild the Wix Studio concept, not the old Squarespace site.

Approved Wix reference URLs only:

- `https://blastandaftermath.wixstudio.com/website-2`
- `https://blastandaftermath.wixstudio.com/website-2/info`
- `https://blastandaftermath.wixstudio.com/website-2/blank`
- `https://blastandaftermath.wixstudio.com/website-2/blank-1`

Do not crawl unrelated Wix URLs. The user warned that the wider Wix account contains unrelated friend/client material.

## Implemented

- Static custom-coded Netlify site.
- Homepage rebuilt around the Wix homepage video reference:
  - Desktop video: `assets/video/home-desktop.mp4`
  - Mobile video: `assets/video/home-mobile.mp4`
  - Poster images in `assets/video/`
- Shared dark Wix-style header/nav using local Wix logo:
  - `assets/ffx-logo-white.png`
- About page:
  - Wix reference copy included.
  - User-provided intro line added.
  - Service headings normalized to Title Case.
  - Typo fixed: `deemed too dangerous`.
  - Placeholder Laurels section added.
  - Poster carousel added here, not on homepage.
- Contact page:
  - Simplified form to `Email` + `Text`.
  - London workshop address retained.
- Crew Form page:
  - Simplified form to `Email` + `Text`.
- Footer:
  - Copyright updated to `© 2026`.
  - Plain email/phone removed.
  - `Get In Touch` button links to `/contact/`.
  - `WhatsApp coming soon` placeholder.
  - Social links added:
    - IMDB: `https://www.imdb.com/name/nm2087361`
    - Instagram: `https://www.instagram.com/13fingerfx`
    - LinkedIn: `https://www.linkedin.com/in/dan-martin-b8385322`
    - Bluesky: `https://bsky.app/profile/danmartin.bsky.social`
    - YouTube: `https://www.youtube.com/@13fingerfx`
- SEO:
  - Search intro used in page descriptions.
  - Keyword meta tags added to main pages.

## Stored For Later

Poster carousel handoff is committed under:

`poster-carousel/`

Important files:

- `poster-carousel/IMPLEMENTATION.md`
- `poster-carousel/poster-carousel.html`
- `poster-carousel/poster-carousel.css`
- `poster-carousel/poster-carousel.js`
- `poster-carousel/carousel-desktop-534h/`
- `poster-carousel/carousel-mobile-tablet-602h/`

The carousel images are intentionally stored in Git. It is currently wired into the About page only.

## User Preferences And Constraints

- Wants custom code, not Squarespace Developer Mode.
- Netlify is preferred because the user already has an account.
- Squarespace should only remain as domain/DNS provider until later transfer or DNS changes.
- Do not expose plain email address or personal mobile number on the site.
- Work WhatsApp number may be added later.
- Homepage should not use the poster carousel.
- Poster carousel belongs in/about the About section for now.
- Keep design close to the Wix concept.
- The user noticed bottom cropping on tablet; CSS now uses `svh` and reduced viewport targets, but this still needs real device review.

## Known Follow-Ups

- Check the live Netlify deploy after the latest commit finishes.
- Visually compare all pages against the Wix references.
- Tablet/iPad pass: verify the homepage video no longer crops awkwardly at the bottom.
- Improve About Laurels once the user provides exact awards/laurels.
- Potentially replace placeholder `WhatsApp coming soon` with a real WhatsApp link.
- Consider adding structured data / Open Graph images.
- Consider replacing/augmenting meta keywords with better page copy, since modern search engines mostly ignore meta keywords.
- Eventually point `13fingerfx.com` DNS at Netlify after visual approval.

## Useful Commands

```bash
cd "/Users/DanMartin/Documents/New project/13fingerfx-new-site"
git status --short --branch
python3 -m http.server 4173 --bind 127.0.0.1
git log --oneline --max-count=5
```

Push command:

```bash
git push
```

Netlify build settings:

- Build command: leave blank
- Publish directory: `.`

## Handover Prompt For New Session

```text
We are working on the 13 Finger FX Netlify site.

Repo:
https://github.com/13fingerfx/13fingerfx-new-site

Local path:
/Users/DanMartin/Documents/New project/13fingerfx-new-site

Live Netlify URL:
https://13fingerfx.netlify.app

Please read PROGRESS.md first, then inspect the current repo state.

Important context:
- Rebuild the Wix Studio concept, not the old Squarespace site.
- Approved Wix references only:
  - https://blastandaftermath.wixstudio.com/website-2
  - https://blastandaftermath.wixstudio.com/website-2/info
  - https://blastandaftermath.wixstudio.com/website-2/blank
  - https://blastandaftermath.wixstudio.com/website-2/blank-1
- Do not crawl unrelated Wix URLs.
- Homepage uses Wix-referenced video assets.
- Poster carousel is stored in Git and currently belongs on the About page only.
- Do not expose plain email or personal mobile.
- Footer should use Get In Touch button, WhatsApp placeholder, and social links.
- Latest known commit before handover: 161dd1c.

First tasks:
1. Check git status.
2. Check the live Netlify deploy.
3. Visually compare the homepage, About, Contact, and Crew Form against the approved Wix references.
4. Pay special attention to iPad/tablet bottom cropping on the homepage.
5. Continue with scoped edits, commit, and push to main when ready.
```
