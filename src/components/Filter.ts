import util from 'src/util';
import Base from '../Base';

export default class Filter extends Base {

    type = '';  //滤镜类型

    constructor(options: any) {
        super();
        this.optionsInject(options, {

        }, {
            type: util.isString
        });
    }

    static create(value: any) {
        if(util.isUndefined(value)) return value;
        return Filter.isInstance(value) ? value : new Filter(value);
    }

    static isInstance(value: any) {
        return value instanceof Filter;
    }

}
