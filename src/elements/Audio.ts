import Media from './Media';

export default class Audio extends Media {

    static type = Audio.Type.Subtitle;
    type = Audio.Type.Subtitle;

    static isInstance(value: any) {
        return value instanceof Audio;
    }

}
