import IImageOptions from './interface/IImageOptions';
import Element from './Element';
import Crop from './components/Crop';
import util from '../util';


export default class Image extends Element {

    static type = Element.Type.Image;
    type = Element.Type.Image;
    src?: string;  //图像来源
    path?: string;  //图像路径
    mode?: string;  //图像显示模式
    crop?: Crop;  //图像裁剪参数
    dynamic?: boolean;  //是否为动态图像
    loop?: boolean;  //动态图像是否循环播放

    constructor(options: IImageOptions) {
        super(options);
        this.optionsInject(options, {
            dynamic: util.isBoolean,
            loop: util.isBoolean,
            crop: Crop.create
        }, {
            src: util.isString,
            path: util.isString,
            mode: util.isString,
            crop: Crop.isInstance,
            dynamic: util.isBoolean,
            loop: util.isBoolean
        });
    }

    static isInstance(value: any) {
        return value instanceof Image;
    }

}
