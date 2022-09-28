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
            <video  src="/assets/portfolio/video/${this.video}" class="movie" controls autoplay>
        `
    }
}

export default Video;