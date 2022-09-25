// recupérere iD
const id = getId()

function getId() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    return Number(params.id);

}

// recuperer les données


const data = await fetch('data/photographers.json').then(a => a.json())


//trier les données : le photographe +ses medias

const photographer = data.photographers.find(a => a.id == id)
console.log('a', photographer)


const medias = data.media.filter(a => {
    return a.photographerId == id
})


//afficher les données

const photographerPicture = document.createElement('div')

const htmlPicture = `
<img class= "photographer_picture" src="/assets/photographers/${photographer.portrait}">
`
photographerPicture.innerHTML = htmlPicture
document.querySelector('.photograph-header').prepend(photographerPicture)


const photographerSection = document.createElement('div')
photographerSection.className = "photographer"
const html = `
<h1> ${photographer.name} </h1>
<h2> ${photographer.city + ', ' + photographer.country}</h2>
`
photographerSection.innerHTML = html
document.querySelector('.photograph-header').prepend(photographerSection)


medias.forEach(function(media) {

    let imageSection = document.createElement('div')
    imageSection.className = "card_picture"
    const html = `
        <span> ${media.title} </span>
        <img class="picture" src="/assets/portfolio/medium/${media.image}">
        `
    imageSection.innerHTML = html
    document.querySelector('.section_media').prepend(imageSection)
        // console.log(media.image)
})