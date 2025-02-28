import axios from 'axios';

export function getImage(input) {
    const apiKey = '49113476-20f613f5ec96a5878cf6b2003';

    return axios('https://pixabay.com/api/', {
        params: {
            key: apiKey,
            q: encodeURIComponent(input),
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        },
    });
}
