import Media from './Media.js'

class Image extends Media
{
    constructor(data, photographer)
    {    
        super(data, photographer)  
        this.image = data.image;
    }

    buildHtml()
    {
        return`
        ${this.rederWrapper()}
        <img class="picture media" src="/assets/portfolio/medium/${this.image}" alt="Photo de ${this.photographer.name} : ${this.title}">
        `
    }

    getSlide()
    {
        return `
            <img class="media-slider" data-id="${this.id}"  src="/assets/portfolio/medium/${this.image}"></img>
            ${this.showSlideDetails()}
        `

    }
   
}

export default Image;