class Media
{
    constructor(data, photographer)
    {
        this.id = data.id;
        this.photographer = photographer;
        this.title = data.title;
        this.likes = data.likes;
        this.date = data.date;
        this.price = data.price;
        this.hasBeenLiked = false;
    }

    
    toogleLike()
    {
        const heart = document.querySelector(`[data-id='${this.id}'] .heart .fa-heart`);
        if (this.hasBeenLiked)
        {
            this.likes--;
            heart.classList.remove('fa-solid')
            heart.classList.add('fa-regular')
        }else{
            this.likes++;
            heart.classList.remove('fa-regular')
            heart.classList.add('fa-solid')
        }

        this.hasBeenLiked = ! this.hasBeenLiked
        
        document.querySelector(`div[data-id='${this.id}'] .like_picture`).innerHTML = this.likes
        
    }

    rederWrapper()
    {
        return `
        <div class='like' data-id='${this.id}'>
            <span class='title'> ${this.title} </span>
            <span> 
                <span class='like_picture'> ${this.likes}</span> 
                <a class='heart'> <i class='fa-regular fa-heart'></i></a>
            </span>        
        </div>`
    }

    showSlideDetails()
    {
        return `<div class='slider-details'>${this.title}</div>`
    }


}

export default Media;