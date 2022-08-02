import Image from './Image';

export default class Sticker extends Image {

    static isInstance(value: any) {
        return value instanceof Sticker;
    }

}
