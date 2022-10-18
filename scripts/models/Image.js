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
        
        <a href="#" class="picture media">
        <img class="picture media" src="/assets/portfolio/medium/${this.image}" alt="Photo de ${this.photographer.name} : ${this.title}">
        </a>
        ${this.rederWrapper()}
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