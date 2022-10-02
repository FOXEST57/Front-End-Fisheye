import Media from './Media.js'
 
class Video extends Media
{
    constructor(data)
    {
        super(data)
        this.video = data.video;
    }
    buildHtml()
    {
        return`
            ${this.rederWrapper()}
            <video  src="/assets/portfolio/video/${this.video}" class="movie media" controls autoplay>
        `
    }

    getSlide()
    {
      return`<video  src="/assets/portfolio/video/${this.video}" class="media-slider" data-id="${this.id}" controls autoplay>`  
    }
}

export default Video;