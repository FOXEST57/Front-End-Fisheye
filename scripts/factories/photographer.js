export default photographerFactory;




function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('a');
        article.setAttribute('href', 'photographer.html?id=' + 'test');
        console.log(photographers);
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;

        const h3 = document.createElement('h3');
        h3.textContent = city + ',  ' + country;
        const h4 = document.createElement('h4');
        h4.textContent = tagline;
        const p = document.createElement('p');
        p.textContent = price + ' €/jour';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4)
        article.appendChild(p);

        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}

// function photographerFactory(data) {
//     const { name, portrait, city, country, tagline, price } = data;

//     const picture = `assets/photographers/${portrait}`;

//     function getUserCardDOM() {
//         // const link = document.createElement('a');
//         // const img = document.createElement('img');
//         // link.setAttribute("src", 'photographer.html')
//         // const h2 = document.createElement('h2');
//         // h2.textContent = name;
//         // const h3 = document.createElement('h3');
//         // h3.textContent = city + ',  ' + country;
//         // const h4 = document.createElement('h4');
//         // h4.textContent = tagline;
//         // const p = document.createElement('p');
//         // p.textContent = price + ' €/jour';
//         // link.appendChild(img);
//         // link.appendChild(h2);
//         // link.appendChild(h3);
//         // link.appendChild(h4)
//         // link.appendChild(p);

//         // return (link);
//     }
//     return { name, picture, city, country, tagline, price, getUserCardDOM }
// }