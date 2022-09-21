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

// console.log(data.photographers)

//trier les données : le photographe +ses medias

const photographer = data.photographers.find(a => a.id == id)
console.log(photographer)

const medias = data.media.filter(a => {
    return a.photographerId == id
})
console.log(medias)

//afficher les données

const photographerSection = document.createElement('section')
photographerSection.className = "photographer"
const html = `
<h1> ${photographer.name} </h1>
<h2> dsffds </h2>
<img src="/assets/photographers/${photographer.portrait}">
<img src="/assets/portfolio/medium/${medias.image}">
`
photographerSection.innerHTML = html
document.querySelector('.photograph-header').prepend(photographerSection)