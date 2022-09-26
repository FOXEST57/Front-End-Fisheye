class Image 
{
    constructor(data)
    {
            this.id = data.id;
            this.photographerId = data.photographerId;
            this.title = data.title;
            this.image = data.image;
            this.likes = data.likes;
            this.date = data.date;
            this.price = data.price;
    }
    buildHtml()
    {
        return`
            <span> ${this.title} </span>
            <img class="picture" src="/assets/portfolio/medium/${this.image}">
        `
    }

}

export default Image;