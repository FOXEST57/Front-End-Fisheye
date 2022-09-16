export default getPhotographers;

//ici nous récupérons les données dans le fichier json puis avec .then nous les rendons lisible pour le js

async function getPhotographers() {

    return await fetch('/data/photographers.json').then(a => a.json())

}