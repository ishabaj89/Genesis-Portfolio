# Genesis Portfolio

A 3-page portfolio website recreated from the **Genesis** Figma design and styled with **Sass**.

| Page | File | Figma frame |
|---|---|---|
| Home | `index.html` | Home — 1360 × 3840 |
| Project details | `project.html` | Project Details — 1360 × 2068 |
| Contact | `contact.html` | Contact — 1360 × 1375 |

The pages are linked through the navigation in the header and footer:
**Genesis logo → Home**, **Projects → Project details**, **Contact → Contact**.
Every image in the Home project grid also links to the Project details page.

## Folder structure

```
genesis-portfolio/
├── index.html              Home page
├── project.html            Project details page
├── contact.html            Contact page
├── css/
│   └── style.css           Made by Prepros (autoprefixed + minified), linked in the HTML
├── scss/
│   ├── style.scss          Main Sass file – imports all the partials below
│   ├── abstracts/
│   │   ├── _index.scss     Forwards variables + mixins
│   │   ├── _variables.scss Colours, fonts, sizes, breakpoints
│   │   ├── _mixins.scss    respond(), flex(), text()
│   │   └── _placeholders.scss  %cover-image, %fade-on-hover (@extend)
│   ├── base/
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── layout/
│   │   ├── _container.scss 1110px content column
│   │   ├── _header.scss    Header + navigation
│   │   └── _footer.scss
│   ├── components/
│   │   ├── _button.scss
│   │   ├── _form.scss
│   │   └── _social.scss
│   └── pages/
│       ├── _home.scss
│       ├── _project.scss
│       └── _contact.scss
└── images/
    ├── icons/              logo.svg, dribbble.svg, instagram.svg, twitter.svg
    └── *.jpg               project photos + map
```

## Design values (from Figma)

- **Font:** Mulish: Regular 400, Italic 400, Bold 700 (Google Fonts)
- **Colours:** text `#111111`, primary `#4A4FF2`, divider `#D8D8D8`, background `#FFFFFF`
- **Layout:** 1360px frame, 1110px content (125px each side)
- **Type sizes:** 40/55 titles, 28/38 services intro, 22 "Shooting Stars" + award names, 18 menu/details, 16/26 body
- **Home grid:** 3 columns × 350px, 30px column gap, 20px row gap
- **Project gallery:** 3 × 350 × 400, 30px gap
- **Button:** 125 × 50, `#4A4FF2`

## Sass features used

- **Variables:** colours, fonts and sizes in `abstracts/_variables.scss`
- **Nesting + `&`:** BEM class names (`nav` → `&__list` → `&__link` → `&:hover`), max 3 levels deep
- **Calculations:** `$container-width: $frame-width - $side-margin * 2` (= 1110px)
- **Partials:** every file starting with `_`, loaded into `style.scss` with `@use` (always first in the file)
- **Mixins with arguments:** `respond()`, `flex()`, `text()`
- **`@extend` + placeholder selectors:** `%cover-image`, `%fade-on-hover` in `abstracts/_placeholders.scss`
- **Map + `@each` loop:** project image heights; `sass:color` for the button hover

## Processing (same settings as Prepros)

Prepros processes `scss/style.scss` → **`css/style.css`** (autoprefixed + minified, with
source map). The HTML links **`css/style.css`**; never edit it by hand.

Autoprefixer targets `> 2%, not dead` (set in `package.json` → `browserslist`).

**Option A — npm:**

```bash
npm install
npm run sass     # builds once, then watches and rebuilds on every save
npm run build    # one-off build
```

**Option B — Prepros:** Add Project → select this folder. In Project Settings turn on
the File Watcher, and under CSS Tools tick *Autoprefixer* and *Minify*. Under Sass
tick *Source Map*. Click `scss/style.scss` (output: `css/style.css`),
and click **Process File**. Keep Prepros running while you code.
