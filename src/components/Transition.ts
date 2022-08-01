import ITransitionOptions from './interface/ITransitionOptions';
import Base from '../Base';
import util from '../util';

export default class Transition extends Base {

    type = '';  //转场类型
    duration = 0;  //转场持续时长

    constructor(options: ITransitionOptions) {
        super();
        this.optionsInject(options, {
            duration: Number
        }, {
            type: util.isString,
            duration: util.isFinite
        });
    }

    static create(value: any) {
        if(util.isUndefined(value)) return value;
        return Transition.isInstance(value) ? value : new Transition(value);
    }

    static isInstance(value: any) {
        return value instanceof Transition;
    }

}
