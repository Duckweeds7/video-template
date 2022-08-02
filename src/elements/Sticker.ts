import Image from './Image';

export default class Sticker extends Image {

    static type = Image.Type.Subtitle;
    type = Image.Type.Subtitle;

    static isInstance(value: any) {
        return value instanceof Sticker;
    }

}
