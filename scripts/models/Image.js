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
        <div class="like" data-id="${this.id}">
            <span class="title"> ${this.title} </span>
            <span> 
                <span class="like_picture"> ${this.likes}</span> 
                <span class="heart"> <i class="fa-solid fa-heart"></i></span>
            </span>  
        </div>
        <img class="picture" src="/assets/portfolio/medium/${this.image}">
        `
    }
   
}

export default Image;