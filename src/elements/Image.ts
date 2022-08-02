import Element from './Element';

export default class Image extends Element {

    static type = Element.Type.Image;
    type = Element.Type.Image;

    static isInstance(value: any) {
        return value instanceof Image;
    }

}
