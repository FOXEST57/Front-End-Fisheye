
class Slider
{
    constructor(medias)
    {
        this.hydrate(medias);
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
        document.querySelector('.slider-close').addEventListener('click', () =>
        {
            this.close()
        })

        document.querySelector('.previous').addEventListener('click', () =>
        {
            
        })

        document.querySelector('.next').addEventListener('click', () =>
        {
           const currentId = Number(document.querySelector('.media-slider').dataset.id);
           const currentindex = this.all.findIndex(a => a.id === currentId)
           let newIndex = currentindex + 1;
           if (newIndex > (this.all.length) - 1)
           {
                newIndex = 0;
           }
           const newMedia = this.all[newIndex]
           this.show(newMedia);
        })

        document.querySelector('.previous').addEventListener('click', () =>
        {
           const currentId = Number(document.querySelector('.media-slider').dataset.id);
           const currentindex = this.all.findIndex(a => a.id === currentId)

        //    let arr1=[0, 2, 1, 5, 8];  
        //     const getLastArrItem = (arr) => { 
        //     let lastItem=arr[arr.length-1];  
        //     console.log(`Last element is ${lastItem}`); 
        //     }  
        //     getLastArrItem(arr1); 
           let newIndex = currentindex - 1;

           if (newIndex = 0 )
           {
                newIndex = (arr) => {
                let lastItem=arr[arr.length-1];     
                }
                newIndex(medias);
           }
           const newMedia = this.all[newIndex]
           this.show(newMedia);
        })


    }

    hydrate(medias)
    {
        this.all = medias
    }

    open()
    {
        document.querySelector('#lightbox').style.display = 'flex'
    }

    close()
    {
        document.querySelector('#lightbox').style.display = 'none'
    }

    show(media)
    {
        document.querySelector('.lightbox-media').innerHTML = media.getSlide();
    }


}

export default Slider

