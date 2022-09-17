import imageFactory from "../factories/image.js";

import getPhotographers from '/data/api.js'


// //Mettre le code JavaScript lié à la page photographer.html

const id = getId()



async function init() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    const photographer = photographers.find(a => a.id === id);
    const medias = media.filter(a => a.photographerId === id);

    console.log(medias)


    // displayData(photographer);

};

init()

// Ici nous récupérons l'ID du photographe grace au query string

function getId() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return Number(params.id);

}