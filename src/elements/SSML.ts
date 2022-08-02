import Element from './Element';

export default class SSML extends Element {

    static type = Element.Type.SSML;
    type = Element.Type.SSML;

    static isInstance(value: any) {
        return value instanceof SSML;
    }

}
