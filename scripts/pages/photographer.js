import getPhotographers from '/data/api.js'
import imageFactory from "../factories/image.js";
//Mettre le code JavaScript lié à la page photographer.html
const id = getId()

async function displayData(media) {
    const mediaSection = document.querySelector(".main");

    media.forEach((photo) => {
        const photoModel = imageFactory(photo);
        const userCardDOM = photoModel.getMediasUserCardDOM();
        main.appendChild(userCardDOM);
        // console.log(userCardDOM)
    });
    console.log(media)
};

async function init() {
    // Récupère les datas des photographes
    const { media, photographers } = await getPhotographers();
    // const photo = media.find(a => a.id === id);
    // const medias = media.filter(a => a.id === id);

    displayData(media, photographers);


};
// console.log(getPhotographers())
// console.log(displayData())
// console.log(imageFactory)

init()
    // console.log(init())



// Ici nous récupérons l'ID du photographe grace au query string

function getId() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return Number(params.id);

}
console.log(getId())