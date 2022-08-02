import Element from './Element';

export default class Text extends Element {

    static isInstance(value: any) {
        return value instanceof Text;
    }

}
