import Media from './Media';

export default class Video extends Media {

    static type = Media.Type.Video;
    type = Media.Type.Video;

    static isInstance(value: any) {
        return value instanceof Video;
    }

}
