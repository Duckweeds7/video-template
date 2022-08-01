import IEffectOptions from './interface/IEffectOptions';
import Base from '../Base';
import util from '../util';

export default class Effect extends Base {

    type = '';  //动效类型
    duration = 0;  //动效持续时长
    direction?: string;  //动效方向

    constructor(options: IEffectOptions) {
        super();
        this.optionsInject(options, {
            duration: Number
        }, {
            type: util.isString,
            duration: util.isFinite,
            direction: util.isString
        });
    }

    static create(value: any) {
        if(util.isUndefined(value)) return value;
        return Effect.isInstance(value) ? value : new Effect(value);
    }

    static isInstance(value: any) {
        return value instanceof Effect;
    }

}
