import Media from './Media';

export default class Audio extends Media {

    static isInstance(value: any) {
        return value instanceof Audio;
    }

}
