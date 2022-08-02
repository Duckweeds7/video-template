import Element from './Element';

export default class Group extends Element {

    static isInstance(value: any) {
        return value instanceof Group;
    }

}
