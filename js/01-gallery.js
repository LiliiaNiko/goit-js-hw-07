import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`}).join(' ');
};

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.classList.add('.gallery');

console.log(itemsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);



function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    };
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`, {
    onShow: (instance) => window.addEventListener('keydown', onEscKeyPress),
    onClose: (instance) => window.removeEventListener('keydown', onEscKeyPress)
  })

    instance.show();

    function onEscKeyPress() {
    instance.close();
    };
    
    
};

//function onModalClose() {
    //window.removeEventListener('keydown', onEscKeyPress);
//};

//console.log(window)



console.log(galleryItems);

