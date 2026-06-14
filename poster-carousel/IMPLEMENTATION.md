# Poster Carousel Implementation Notes

## Files to upload

Upload these five items together to the website:

- `poster-carousel.html`
- `poster-carousel.css`
- `poster-carousel.js`
- `carousel-desktop-534h/`
- `carousel-mobile-tablet-602h/`

The two image folders must stay next to `poster-carousel.js`, unless you update the folder paths inside the JavaScript file.

## Add the carousel to the page

Copy the contents of `poster-carousel.html` into the page where the carousel should appear:

```html
<section class="poster-carousel" aria-label="Movie posters">
  <div class="poster-carousel__viewport">
    <div class="poster-carousel__track" id="posterCarouselTrack"></div>
  </div>
</section>

<link rel="stylesheet" href="poster-carousel.css">
<script src="poster-carousel.js" defer></script>
```

If the page already has a shared site header/footer template, place only the `<section>` in the page body, then add the CSS link in the document `<head>` and the script before the closing `</body>` tag or with `defer` in the `<head>`.

## Folder structure

The default setup expects this structure:

```text
your-page-folder/
  poster-carousel.html
  poster-carousel.css
  poster-carousel.js
  carousel-desktop-534h/
    47 Meters.jpg
    ...
  carousel-mobile-tablet-602h/
    47 Meters.jpg
    ...
```

If the files are placed somewhere else, update these two lines in `poster-carousel.js`:

```js
const desktopPosterPath = "carousel-desktop-534h/";
const mobilePosterPath = "carousel-mobile-tablet-602h/";
```

For example, if the folders are uploaded into `/assets/posters/`, use:

```js
const desktopPosterPath = "/assets/posters/carousel-desktop-534h/";
const mobilePosterPath = "/assets/posters/carousel-mobile-tablet-602h/";
```

## Responsive behavior

The carousel uses:

- Desktop images: `carousel-desktop-534h/`
- Mobile/tablet images: `carousel-mobile-tablet-602h/`

The breakpoint is currently `900px`. To change it, update both places where `900px` appears:

- `poster-carousel.css`
- `poster-carousel.js`

## Speed and spacing

In `poster-carousel.css`, these values control the feel:

```css
--poster-gap: 28px;
--scroll-duration: 140s;
```

Higher `--scroll-duration` means slower movement. Lower means faster.

There is also a mobile/tablet override:

```css
@media (max-width: 900px) {
  .poster-carousel {
    --poster-gap: 20px;
    --scroll-duration: 120s;
  }
}
```

## Accessibility

The script generates image alt text from each filename. If exact official poster titles are needed, edit the `posterFiles` array in `poster-carousel.js` or replace the generated alt text logic with a list of custom titles.

The carousel pauses on hover and disables animation for users who have reduced motion enabled.

## Adding or removing posters

To add a poster:

1. Create both resized versions.
2. Add the desktop version to `carousel-desktop-534h/`.
3. Add the mobile/tablet version to `carousel-mobile-tablet-602h/`.
4. Add the matching filename to the `posterFiles` array in `poster-carousel.js`.

Both folders should use the same filename for the same poster.

To remove a poster, remove its filename from the `posterFiles` array. The image files can then be deleted from both folders.
