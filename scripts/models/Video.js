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
        <div class="like" data-id="${this.id}">
            <span class="title"> ${this.title} </span>
            <span> 
                <span class="like_picture"> ${this.likes}</span> 
                <span class="heart"> <i class="fa-solid fa-heart"></i></span>
            </span>        
        </div>
            <video  src="/assets/portfolio/video/${this.video}" class="movie" controls autoplay>
        `
    }
}

export default Video;