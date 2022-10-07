import MediaFactory from "../factories/media.js";
import Slider from "../models/Slider.js";
//import { displayModal, closeModal } from "../utils/contactForm.js";

// recupère iD
const id = getId()
// recupère les données
const data = await fetch('data/photographers.json').then(a => a.json())
//tri les données : le photographe + ses medias
const photographer = data.photographers.find(a => a.id == id)
const medias = build(data, photographer);

//console.log(displayModal());

//afficher les détails du photographe
displayProfile(photographer);
//affiche les medias du photographe
displayMedias(medias);
//affiche le nombre total de like et le prix du photographe
displayTotalLikes(photographer)
//bouton pour faire le tri
buidDopdownSorting();
//permet d'ajouter ou d'enlever un like
listenForLikes(medias);
//mise à jour du nombre de like
countTotalLikes(medias);
//ecoute le bouton pour le tri
listenForSorting(medias);
listenForDropdownOpening();

let slider = new Slider();
slider.hydrate(medias);
slider.listen()







function listenForLikes(medias)
{
    medias.forEach(media =>
    {
        const likeButton = document.querySelector(`div[data-id="${media.id}"] .heart`)
        likeButton.addEventListener('click',() =>
        {
            media.toogleLike();
            countTotalLikes(medias);
        })
    })
}

function countTotalLikes(medias)
{
    const total = medias.reduce((acc, media) => acc += media.likes, 0);
    document.querySelector('.photographerLikes').innerHTML = total
     
}

function displayTotalLikes(photographer)
{
    const totalLike = document.createElement('div')
    totalLike.className = "totalLike"
    const html = `
        <h2 class="photographerLikes"> 0 </h2>
        <i class="fa-solid fa-heart"></i>
        <h3 class="photographerPrice"> ${photographer.price + ' € / jour '} </h3>
        `
    totalLike.innerHTML = html
    document.querySelector('main').prepend(totalLike)  
}

function build(data, photographer)
{
    const mediasRaw = data.media.filter(a => a.photographerId == id)
    const medias = []
    const mediaFactory = new MediaFactory(photographer);
    mediasRaw.forEach(mediaRaw =>
    {
        let media = mediaFactory.build(mediaRaw) 
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

function displayProfile(photographer)
{
    const photographerPicture = document.createElement('div')
    const htmlPicture = `
        <img class= "photographer_picture" src="/assets/photographers/${photographer.portrait}">
        `
    photographerPicture.innerHTML = htmlPicture
    document.querySelector('.photograph-header').prepend(photographerPicture)


    const photographerSection = document.createElement('div')
    photographerSection.className = "photographer"
    const html = `
        <h1 class="photographerName"> ${photographer.name} </h1>
        <h2 class="photographerCity"> ${photographer.city + ', ' + photographer.country}</h2>
        <p> ${photographer.tagline} </p>
            `
    photographerSection.innerHTML = html
    document.querySelector('.photograph-header').prepend(photographerSection)

    document.querySelector('#photographerName').innerText = photographer.name
}

function displayMedias(medias)
{
    document.querySelector('.section_media').innerHTML = '';
    medias.forEach(function(media) {
        let imageSection = document.createElement('div')
        imageSection.className = "card_picture" 
        imageSection.innerHTML = media.buildHtml()
        document.querySelector('.section_media').append(imageSection)
    })
}

function buidDopdownSorting()
{
   
    let element = document.createElement('div');
    element.className ="wrapTry"
    
    element.innerHTML = `
    <span class="titleButton">Trier par</span>
    <div class="currentOrder">Popularité</div>
    <div class="options">
        <span class="sortButton" data-id="Titre">Titre</span>
        <span class="sortButton" data-id="Popularité">Popularité</span>
        <span class="sortButton date" data-id="Date">Date</span>
    <div/>
    `
    document.querySelector('main').prepend(element)
    document.querySelector('.options').style.display = 'none';
}

function listenForDropdownOpening()
{
    document.querySelector('.currentOrder').addEventListener('click', () =>
    {
        document.querySelector('.currentOrder').style.display = 'none';
        document.querySelector('.options').style.display = 'block';
    })
}

function listenForSorting(medias)
{
    document.querySelectorAll('.sortButton').forEach(button =>
    {
        button.addEventListener('click', () =>
        {
            document.querySelector('.currentOrder').style.display = 'block';
            document.querySelector('.options').style.display = 'none';

            let order = button.dataset.id;
            let mediaSorted = []
            document.querySelector('.currentOrder').innerText = order
            if (order === 'Popularité')
            {
                mediaSorted = sortByPopularity(medias)    
            }
            if (order === 'Titre')
            {
                mediaSorted = sortByTitle(medias)
            }
            if (order === 'Date')
            {
                mediaSorted = sortByDate(medias)   
            }
            displayMedias(mediaSorted);
            listenForLikes(mediaSorted);
            slider.hydrate(mediaSorted);
            slider.listen()
        })
    })

}

function sortByPopularity(medias)
{
    return medias.sort((a,b) =>
    {
        if(a.likes > b.likes)
        {
            return -1
        }
        if(a.likes < b.likes)
        {
            return 1
        }
        return 0;
    })

}

function sortByTitle(medias)
{
    return medias.sort((a,b) =>
    {
        if(a.title < b.title)
        {
            return -1
        }
        if(a.title > b.title)
        {
            return 1
        }
        return 0;
    })

}

function sortByDate(medias)
{
    return medias.sort((mediaA, mediaB) =>
    {
        const a = mediaA.date.replace(/-/gi, '');
        const b = mediaB.date.replace(/-/gi, '');
        
        if(a > b)
        {
            return -1
        }
        if(a < b)
        {
            return 1
        }
        return 0;
    })
    
}