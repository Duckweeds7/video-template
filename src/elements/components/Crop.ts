import ICropOptions from "./interface/ICropOptions";
import Base from "../../Base";
import util from "../../util";

export default class Crop extends Base {

    x = 0;  //裁剪起始横轴坐标
    y = 0;  //裁剪起始纵轴坐标
    width = 0;  //裁剪宽度
    height = 0;  //裁剪高度
    style?: string;  //裁剪样式

    constructor(options: ICropOptions) {
        super();
        this.optionsInject(options, {
            x: Number,
            y: Number,
            width: Number,
            height: Number
        }, {
            x: util.isFinite,
            y: util.isFinite,
            width: util.isFinite,
            height: util.isFinite,
            style: util.isString
        });
    }

    static create(value: any) {
        if(util.isUndefined(value)) return value;
        return Crop.isInstance(value) ? value : new Crop(value);
    }

    static isInstance(value: any) {
        return value instanceof Crop;
    }

}
