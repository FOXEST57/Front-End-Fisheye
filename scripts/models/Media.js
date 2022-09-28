class Media
{
    constructor(data)
    {
            this.id = data.id;
            this.photographerId = data.photographerId;
            this.title = data.title;
            this.likes = data.likes;
            this.date = data.date;
            this.price = data.price;
            this.hasBeenLiked = false;
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
           
            document.querySelector(`div[data-id="${this.id}"] .like_picture`).innerHTML = this.likes
    }

    rederWrapper()
    {
        return `
        <div class="like" data-id="${this.id}">
            <span class="title"> ${this.title} </span>
            <span> 
                <span class="like_picture"> ${this.likes}</span> 
                <span class="heart"> <i class="fa-solid fa-heart"></i></span>
            </span>        
        </div>`
    }


}

export default Media;