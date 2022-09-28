import Image from '../models/Image.js';
import Video from '../models/Video.js';


class MediaFactory
{
    build(mediaRaw)
    {
        if(mediaRaw.image)
        {
            return new Image(mediaRaw);
        }
        return new Video(mediaRaw);
        
    }

}

export default MediaFactory;