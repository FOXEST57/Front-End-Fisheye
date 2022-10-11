
class Slider
{
    constructor ()
    {
    }
    
    listen() {
        document.querySelectorAll('.media').forEach(mediaEl =>
        {
            mediaEl.addEventListener('click', () =>
            {
                const id = Number(mediaEl.closest('.card_picture').querySelector('.like').dataset.id);
                const media = this.all.find(a => a.id === id)
                this.open()
                this.show(media)
            })
        })

        document.querySelector('.slider-close').addEventListener('click', () => {this.close()})
        document.querySelector('.next').addEventListener('click', () => {this.next();})
        document.querySelector('.previous').addEventListener('click', () => { this.previous() })
        document.addEventListener('keydown', (e) =>
        {
            if (e.key === 'ArrowRight')
            {
                this.next()
            }
            
            if (e.key === 'ArrowLeft')
            {
                this.previous()
            }

            if (e.key === 'Escape')
            {
                this.close()
            }
        })
    }

    hydrate(medias)
    {
        this.all = medias
    }

    close()
    {
        document.querySelector('#slider').style.display = 'none'
    }

    next()
    {
        const currentId = Number(document.querySelector('.media-slider').dataset.id);
        const currentindex = this.all.findIndex(a => a.id === currentId)
        let newIndex = currentindex + 1;
        if (newIndex > this.all.length - 1)
        {
            newIndex = 0;
        }
        const newMedia = this.all[newIndex]
        this.show(newMedia);        
    }
    
    open()
    {
        document.querySelector('#slider').style.display = 'flex'
    }

    previous()
    {
        const currentId = Number(document.querySelector('.media-slider').dataset.id);
        const currentindex = this.all.findIndex(a => a.id === currentId)

        
        let newIndex = currentindex - 1;
        
        if (newIndex < 0)
        {
            newIndex = this.all.length - 1
        }

        const newMedia = this.all[newIndex]
    
        this.show(newMedia);        
    }

    show(media)
    {
        document.querySelector('.lightbox-media').innerHTML = media.getSlide();
    }
}

export default Slider

