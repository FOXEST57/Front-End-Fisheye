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
        <img class="picture" src="/assets/portfolio/medium/${this.image}">
        `
    }
   
}

export default Image;