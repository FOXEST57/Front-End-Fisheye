import getPhotographers from '/data/api.js'
import photographerFactory from '/scripts/factories/photographer.js'



async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const data = await getPhotographers();
    // console.log(data.media)
    displayData(data.photographers);

};
// async function init() {
//     //     // Récupère les datas des photographes
//     const { photographers } = await getPhotographers();

//     photographers.forEach((photographer) => {
//         const link = document.createElement('a');
//         link.setAttribute('href', 'photographer.html')

//         link.innerHTML = `
//             <img src="assets/photographers/${photographer.portrait}"/>
//             <h2>${photographer.name}</h2>
//             <h3>${photographer.city + ' ' + photographer.country}</h3>
//             <h3 class="test">${photographer.tagline}</h3>
//             <p class="prix">${photographer.price + ' €/jour'}</h3>

//             `
//         document.querySelector(".photographer_section").appendChild(link)
//     });
// };


init();