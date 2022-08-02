import Element from './Element';

export default class Media extends Element {

    static isInstance(value: any) {
        return value instanceof Media;
    }

}
