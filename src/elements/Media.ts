import Element from './Element';

export default class Media extends Element {

    static type = Element.Type.Media;
    type = Element.Type.Media;

    static isInstance(value: any) {
        return value instanceof Media;
    }

}
