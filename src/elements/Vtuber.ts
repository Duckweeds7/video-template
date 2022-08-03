import IVtuberOptions from './interface/IVtuberOptions';
import Media from './Media';
import util from '../util';

export default class Vtuber extends Media {

    static type = Media.Type.Vtuber;
    type = Media.Type.Vtuber;
    provider?: string;  //虚拟人服务提供商
    text?: string;  //虚拟人发音文本
    solution?: string;  //虚拟人形象
    declaimer?: string;  //虚拟人音色
    maskSrc?: string;  //虚拟人遮罩来源
    cutoutColor?: string;  //虚拟人抠除色
    
    constructor(options: IVtuberOptions) {
        super(options);
        this.optionsInject(options, {}, {
            provider: util.isString,
            text: util.isString,
            solution: util.isString,
            declaimer: util.isString,
            maskSrc: util.isString,
            cutoutColor: util.isString
        });
    }

    static isInstance(value: any) {
        return value instanceof Vtuber;
    }

}
