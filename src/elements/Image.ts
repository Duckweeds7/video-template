import Element from './Element';

export default class Image extends Element {

    static isInstance(value: any) {
        return value instanceof Image;
    }

}
