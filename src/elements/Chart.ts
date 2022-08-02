import Element from './Element';

export default class Chart extends Element {

    static type = Element.Type.Chart;
    type = Element.Type.Chart;

    static isInstance(value: any) {
        return value instanceof Chart;
    }

}
