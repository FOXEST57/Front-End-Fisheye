import Media from './Media.js'
 
class Video extends Media
{
    constructor(data, photographer)
    {
        super(data,  photographer)
        this.video = data.video;
    }
    
    buildHtml()
    {
        return`
            ${this.rederWrapper()}
            <a href="#" class="movie media">
            <video  class="movie media" data-id="${this.id}" autoplay>
                <source src="/assets/portfolio/video/${this.video}" type="video/mp4">
                <p>Video de ${this.photographer.name} : ${this.title}</p>
            </video> 
            </a>
        `
    }

    getSlide()
    {
        return `<video src="/assets/portfolio/video/${this.video}" class="media-slider" data-id="${this.id}" controls autoplay></video>
            ${this.showSlideDetails()}
        ` 
    }
}

export default Video;