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
            this.hasBeenLiked = false;
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
    toogleLike()
    {

            if (this.hasBeenLiked)
            {
                this.likes--;
                this.hasBeenLiked = false;
                
            }else{
                this.likes++;
                this.hasBeenLiked = true;
                
            }
            console.log(this.hasBeenLiked)
            document.querySelector(`div[data-id="${this.id}"] .like_picture`).innerHTML = this.likes
    }


}

export default Image;