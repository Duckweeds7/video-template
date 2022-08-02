import Element from './Element';

export default class Subtitle extends Element {

    static type = Element.Type.Subtitle;
    type = Element.Type.Subtitle;

    static isInstance(value: any) {
        return value instanceof Subtitle;
    }

}
