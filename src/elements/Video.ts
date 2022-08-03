import IVideoOptions from './interface/IVideoOptions';
import Crop from './components/Crop';
import Media from './Media';

export default class Video extends Media {

    static type = Media.Type.Video;
    type = Media.Type.Video;
    crop?: Crop;

    constructor(options: IVideoOptions) {
        super(options);
        this.optionsInject(options, {
            crop: Crop.create
        }, {
            crop: Crop.isInstance
        });
    }

    static isInstance(value: any) {
        return value instanceof Video;
    }

}
