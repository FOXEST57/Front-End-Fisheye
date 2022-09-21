async function getPhotographers() {

    return await fetch('/data/photographers.json').then(a => a.json())


}
console.log('a', getPhotographers())

const id = getId()

function getId() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return Number(params.id);

}
console.log('b', getId())

async function debut() {
    // Récupère les datas des photographes
    const data = await getPhotographers();
    console.log('c', data.photographers, data.media)

    displayData(data.photographers, data.media);
};
debut()

// function imageFactory(data) {
//     const { name, portrait, city, country, tagline, price, id, title, image, likes } = data;

//     const picture = `assets/photographers/${portrait}`

//     function getMediasUserCardDOM() {
//         const img = document.createElement('img')
//         img.setAttribute("src", picture)

//         const photographer_ident = document.createElement('div')
//         photographer_ident.className = "identite_photographe"

//         const h2 = document.createElement('h2');
//         h2.className = "nom";
//         h2.textContent = name + ' nom';
//         const ville = document.createElement('p');
//         ville.className = "ville"
//         ville.textContent = city + ', ville ' + country + ' pays';
//         const descriptif = document.createElement('p');
//         descriptif.className = "descriptif"
//         descriptif.textContent = tagline + ' descriptif';

//         photographer_ident.appendChild(h2);
//         photographer_ident.appendChild(ville);
//         photographer_ident.appendChild(descriptif)




//         return (photographer_ident);
//     }
//     // console.log(getMediasUserCardDOM())
//     // console.log(photographer_ident)
//     return { name, picture, city, country, tagline, price, id, title, image, likes, getMediasUserCardDOM }
// }