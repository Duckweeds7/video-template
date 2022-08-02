import Element from './Element';

export default class Canvas extends Element {

    static isInstance(value: any) {
        return value instanceof Canvas;
    }

}
