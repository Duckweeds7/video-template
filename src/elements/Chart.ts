import Element from './Element';

export default class Chart extends Element {

    static isInstance(value: any) {
        return value instanceof Chart;
    }

}
