class Video 
{
    constructor(data)
    {
            this.id = data.id;
            this.photographerId = data.photographerId;
            this.title = data.title;
            this.video = data.video;
            this.likes = data.likes;
            this.date = data.date;
            this.price = data.price;
    }
    buildHtml()
    {
        return`
            <span> ${this.title} </span>
            <video  src="/assets/portfolio/video/${this.video}" class="movie" controls autoplay>
        `
    }

}

export default Video;