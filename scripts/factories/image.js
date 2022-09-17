function imageFactory(data) {
    const { name, portrait, city, country, tagline, price, id, title, image, likes } = data;



    const picture = `assets/photographers/${portrait}`;

    function getMediasUserCardDOM() {
        const img = document.createElement('img');
        img.setAttribute("src", picture)

        const photographer_ident = document.createElement('div');
        photographer_ident.className = "identite_photographe"

        const h2 = document.createElement('h2');
        h2.textContent = name;
        const ville = document.createElement('p');
        ville.className = "city"
        ville.textContent = city + ',  ' + country;
        const descriptif = document.createElement('p');
        descriptif.className = "descriptif"
        descriptif.textContent = tagline;

        photographer_ident.appendChild(h2);
        photographer_ident.appendChild(ville);
        photographer_ident.appendChild(descriptif)




        return (photographer_ident);
    }
    return { name, picture, city, country, tagline, price, id, title, image, likes, getMediasUserCardDOM }
}

export default imageFactory