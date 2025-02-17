import getPhotographers from '/data/api.js'
import photographerFactory from '/scripts/factories/photographer.js'

async function displayData(photographers) {
    const photographersSection = document.querySelector('.photographer_section');

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {

    // Récupère les datas des photographes
    const data = await getPhotographers();

    displayData(data.photographers);
}


init();