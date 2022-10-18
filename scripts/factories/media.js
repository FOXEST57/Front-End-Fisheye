import Image from '../models/Image.js';
import Video from '../models/Video.js';



class MediaFactory
{
    constructor(photographer)
    {
        this.photographer = photographer
    }

    build(mediaRaw)
    {
        if(mediaRaw.image)
        {
            return new Image(mediaRaw, this.photographer);
        }
        return new Video(mediaRaw, this.photographer);
        
    }

}

export default MediaFactory;