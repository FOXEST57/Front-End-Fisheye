import Image from '/scripts/factories/Image.js';
import Video from '/scripts/factories/Video.js';

// recupérer iD
const id = getId()
// recuperer les données
const data = await fetch('data/photographers.json').then(a => a.json())
//trier les données : le photographe + ses medias
const photographer = data.photographers.find(a => a.id == id)
const medias = build(data);

//afficher les détails du photographe
displayProfile(photographer);
//affiche les medias du photographe
displayMedias(medias);

//permet d'ajourter ou d'enlever un like
listenForLikes(medias);
function listenForLikes(medias)
{
medias.forEach(media =>
{
        const likeButton = document.querySelector(`div[data-id="${media.id}"] .heart`)
        likeButton.addEventListener('click',() =>
        {
            media.toogleLike();
            //fonction de image ou video
        })
})
}


function build(data)
{
    const mediasRaw = data.media.filter(a => a.photographerId == id)
    const medias = []
    mediasRaw.forEach(mediasRaw =>
    {
        let media;
        if(mediasRaw.image)
        {
            media = new Image(mediasRaw);
        }else
        {
            media = new Video(mediasRaw);
        }
        medias.push(media)
    })
    return medias;

}

function getId() {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    return Number(params.id);
}

function displayProfile(photographer){
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

}


function displayMedias(medias)
{
    medias.forEach(function(media) {
        let imageSection = document.createElement('div')
        imageSection.className = "card_picture" 
        imageSection.innerHTML = media.buildHtml()
        document.querySelector('.section_media').prepend(imageSection)
    })
}