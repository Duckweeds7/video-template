import IMediaOptions from './IMediaOptions';

export default interface IVtuberOptions extends IMediaOptions {
    provider?: string;  //虚拟人服务提供商
    text?: string;  //虚拟人发音文本
    solution?: string;  //虚拟人形象
    declaimer?: string;  //虚拟人音色
    maskSrc?: string;  //虚拟人遮罩来源
    cutoutColor?: string;  //虚拟人抠除色
};
