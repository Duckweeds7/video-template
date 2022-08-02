import Element from './Element';

export default class Canvas extends Element {

    static type = Element.Type.Canvas;
    type = Element.Type.Canvas;

    static isInstance(value: any) {
        return value instanceof Canvas;
    }

}
