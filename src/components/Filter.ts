import Base from '../Base';

export default class Filter extends Base {

    static isInstance(value: any) {
        return value instanceof Filter;
    }

}
