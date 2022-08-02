import Media from './Media';

export default class Video extends Media {

    static isInstance(value: any) {
        return value instanceof Video;
    }

}
