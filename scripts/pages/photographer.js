import getPhotographers from '/data/api.js'
// import displayData from '/scripts/'

// //Mettre le code JavaScript lié à la page photographer.html

const id = getId()

async function init() {
    // Récupère les datas des photographes
    const { photographers, media } = await getPhotographers();
    const photographer = photographers.find(a => a.id === id);
    const medias = media.filter(a => a.photographerId === id);
    console.log(photographer, medias)


    // displayData(photographer, medias);

};

init()

// Ici nous récupérons l'ID du photographe grace au query string

function getId() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    console.log(params.id)
    return Number(params.id);

}

// console.log(params.id)











// const id = getId

// async function getPhotographers() {
//     return await fetch('/data/photographers.json').then(a => a.json())
// }
// // async function displayData(photographers) {
// //     const photographersSection = document.querySelector(".photographer_section");

// //     photographers.forEach((photographer) => {
// //         const photographerModel = photographerFactory(photographer);
// //         const userCardDOM = photographerModel.getUserCardDOM();
// //         photographersSection.appendChild(userCardDOM);
// //     });
// // };

// async function init() {
//     // Récupère les datas des photographes
//     const { photographers } = await getPhotographers();

//     const photographer = photographers.find(a => a.id === id);

//     console.log(photographer)



// photographers.forEach((photographer) => {
//     const link = document.createElement('a');
//     link.setAttribute('href', 'photographer.html?id=' + photographer.id)
//     link.innerHTML = ` 
//         <img src="assets/photographers/${photographer.portrait}" style="max-width: 200px"/>
//         <h2>${photographer.name}</h2>
//         `
//     document.querySelector(".photographer_section").appendChild(link)
// });
// displayData(photographers);
// };


// function getId() {
//     const params = new Proxy(new URLSearchParams(window.location.search), {
//         get: (shearchParams, prop) => shearchParams.get(prop),
//     });
//     return Number(params.id);