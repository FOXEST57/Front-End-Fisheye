export default photographerFactory;




function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('a');
        article.setAttribute('href', 'photographer.html?id=' + id);

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const ville = document.createElement('p');
        ville.className = "city"
        ville.textContent = city + ',  ' + country;
        const descriptif = document.createElement('p');
        descriptif.className = "descriptif"
        descriptif.textContent = tagline;
        const prix = document.createElement('p');
        prix.className = "price"
        prix.textContent = price + ' €/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(ville);
        article.appendChild(descriptif)
        article.appendChild(prix);

        return (article);
    }
    console.log(getUserCardDOM())
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}