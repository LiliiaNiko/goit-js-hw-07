import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryMarkup(galleryItems);



function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      title = "${description}"
    />
  </a>`}).join(' ');
  
  
};
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.classList.add('.gallery');

//console.log(itemsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
};
new SimpleLightbox('.gallery a', { captionDelay: 250 });

//console.log(galleryContainer)


console.log(galleryItems);
