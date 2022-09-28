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


}

export default Media;