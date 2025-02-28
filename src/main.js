import { getImage } from './js/pixabay-api';
import { galleryMarkup } from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const input = document.querySelector('.user-input').value.trim();
    const gallery = document.querySelector('.gallery');

    if (input === '') {
        return;
    }

    gallery.innerHTML = '<p>Loading images, please wait...</p><span class="loader"></span>';

    getImage(input)
        .then(response => galleryMarkup(response))
        .catch(error => {
            gallery.innerHTML = '<p>Something went wrong. Please, try again.</p>';
            console.log(error);
        });
}
