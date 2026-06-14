const posterFiles = [
  "47 Meters.jpg",
  "ABC 2.jpg",
  "ABC2.jpg",
  "AFI.jpg",
  "AFIE 02.jpg",
  "Aaaaaaaah.jpg",
  "Azrael.jpg",
  "Banquet-UK-Artwork.jpg",
  "Banshees of Inisherin - Portrait.jpg",
  "Borderlands.jpg",
  "Caller.jpg",
  "Censor.jpg",
  "Color-out-of-Space-Poster - UK portrait.jpg",
  "DASHCAM - portrait.jpg",
  "Decline and Fall.jpg",
  "Doubledate.jpg",
  "Earwig Portrait1.jpg",
  "F quad.jpg",
  "Firestarter - tall portrait.jpg",
  "Freefire 02.jpg",
  "Girl 03.jpg",
  "H4z4rd.jpg",
  "HIDEOUS+POSTER.jpg",
  "Harold Fry.jpg",
  "High Rise.jpg",
  "Host quad.jpg",
  "Hungry.jpg",
  "In Fabric.jpg",
  "In Fear 02.jpg",
  "In The Earth - portrait.jpg",
  "Journeyman.jpg",
  "Lords of Chaos - Portrait 01.jpg",
  "Minaturist.jpg",
  "Nina Forever 01.jpg",
  "OSotD.jpg",
  "Possessor - yellow.jpg",
  "Sightseers 01.jpg",
  "Sightseers.jpg",
  "Strangers PAN.jpg",
  "Tarot.jpg",
  "Trash Humpers.jpg",
  "Utopia.jpg",
  "Wedding Guest.jpg",
  "Wounded Fawn.jpg",
  "fluxgourmet.jpg",
  "infinity-pool-poster.width-800.jpg"
];

const desktopPosterPath = "carousel-desktop-534h/";
const mobilePosterPath = "carousel-mobile-tablet-602h/";
const track = document.querySelector("#posterCarouselTrack");

function posterAltText(fileName) {
  return fileName
    .replace(/\.jpg$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function buildPoster(fileName, index) {
  const item = document.createElement("div");
  const picture = document.createElement("picture");
  const source = document.createElement("source");
  const image = document.createElement("img");

  item.className = "poster-carousel__item";
  source.media = "(max-width: 900px)";
  source.srcset = mobilePosterPath + encodeURIComponent(fileName);
  image.src = desktopPosterPath + encodeURIComponent(fileName);
  image.alt = posterAltText(fileName);
  image.decoding = "async";
  image.loading = index < 8 ? "eager" : "lazy";

  picture.append(source, image);
  item.append(picture);

  return item;
}

if (track) {
  [...posterFiles, ...posterFiles].forEach((fileName, index) => {
    track.append(buildPoster(fileName, index));
  });
}
