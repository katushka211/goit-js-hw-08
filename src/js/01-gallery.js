// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

const galleryList = galleryItems.reduce(
  (acc, item) =>
    acc +
    `
  <a class="gallery__item" href= ${item.original}>
    <img
      class="gallery__image"
      src= ${item.preview}
      alt=${item.description}
    />
  </a>`,
  ''
);

galleryEl.insertAdjacentHTML('beforeend', galleryList);

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
