import Media from './Media.js'

class Image extends Media
{
    constructor(data)
    {    
        super(data)  
        this.image = data.image;
    }

    buildHtml()
    {
        return`
        ${this.rederWrapper()}
        <img class="picture media" src="/assets/portfolio/medium/${this.image}">
        `
    }

    getSlide()
    {
        return `<img class="media-slider" data-id="${this.id}"  src="/assets/portfolio/medium/${this.image}"></img>`
    }
   
}

export default Image;