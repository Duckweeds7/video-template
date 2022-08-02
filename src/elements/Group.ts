import Element from './Element';

export default class Group extends Element {

    static type = Element.Type.Group;
    type = Element.Type.Group;

    static isInstance(value: any) {
        return value instanceof Group;
    }

}
