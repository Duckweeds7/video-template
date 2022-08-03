import IElementOptions from './IElementOptions';
import ICropOptions from "../components/interface/ICropOptions";
import Crop from "../components/Crop";

export default interface IImageOptions extends IElementOptions {
    src?: string;  //图像来源
    path?: string;  //图像路径
    mode?: string;  //图像显示模式
    crop?: Crop | ICropOptions;  //图像裁剪参数
    dynamic?: boolean | string;  //是否为动态图像
    loop?: boolean | string;  //动态图像是否循环播放
}
