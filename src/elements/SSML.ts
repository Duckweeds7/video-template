import Element from './Element';

export default class SSML extends Element {

    static isInstance(value: any) {
        return value instanceof SSML;
    }

}
