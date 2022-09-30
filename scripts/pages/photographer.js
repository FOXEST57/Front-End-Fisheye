import MediaFactory from "../factories/MediaFactory.js";

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
//fait le trie 
buidDopdownSorting();
//permet d'ajouter ou d'enlever un like
listenForLikes(medias);
//mise à jour du nombre de like
countTotalLikes(medias);
// //ecoute le bouton pour le tri
listenForSorting(medias)





function listenForLikes(medias)
{
    medias.forEach(media =>
    {
        const likeButton = document.querySelector(`div[data-id="${media.id}"] .heart`)
        likeButton.addEventListener('click',() =>
        {
            media.toogleLike();
             //fonction de image ou video
            countTotalLikes(medias);
        })
    })
}

function countTotalLikes(medias)
{
    const total = medias.reduce((acc, media) => acc += media.likes, 0);
    // document.querySelector('h1').innerText = total

    // let total = 0
    // medias.forEach(media =>
    //     {
    //         total = total + media.likes
    //     })
}

function build(data)
{
    const mediasRaw = data.media.filter(a => a.photographerId == id)
    const medias = []
    const mediaFactory = new MediaFactory();
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
<h1> ${photographer.name} </h1>
<h2> ${photographer.city + ', ' + photographer.country}</h2>
`
photographerSection.innerHTML = html
document.querySelector('.photograph-header').prepend(photographerSection)

}

function displayMedias(medias)
{
    document.querySelector('.section_media').innerHTML = '';
    medias.forEach(function(media) {
        let imageSection = document.createElement('div')
        imageSection.className = "card_picture" 
        imageSection.innerHTML = media.buildHtml()
        document.querySelector('.section_media').prepend(imageSection)
    })
}

function buidDopdownSorting()
{
    let element = document.createElement('div');
    element.innerHTML = `
    <span class="sortButton" data-id="title">Titre</span>
    <span class="sortButton" data-id="popularity">Popularité</span>
    <span class="sortButton" data-id="date">Date</span>
    `
    document.querySelector('.section_media').prepend(element)
}

function listenForSorting(medias)
{
    document.querySelectorAll('.sortButton').forEach(button =>
    {
        button.addEventListener('click', () =>
        {
            let order = button.dataset.id;
            let mediaSorted = []
            if (order === 'popularity')
            {
                mediaSorted = sortByPopularity(medias)    
            }
            if (order === 'title')
            {
                mediaSorted = sortByTitle(medias)
            }
            if (order === 'date')
            {
                mediaSorted = sortByDate(mediaSorted)   
            }
            displayMedias(mediaSorted);
            buidDopdownSorting()
            listenForLikes(mediaSorted);
            listenForSorting(mediaSorted);
          
            
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
        if(a.title > b.title)
        {
            return -1
        }
        if(a.title < b.title)
        {
            return 1
        }
        return 0;
    })

}

function sortByDate(medias)
{
    return medias.sort((a,b) =>
    {
        if(a.date > b.date)
        {
            return -1
        }
        if(a.date < b.date)
        {
            return 1
        }
        return 0;
    })

}