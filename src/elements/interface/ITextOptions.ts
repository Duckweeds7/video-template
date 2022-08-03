import IElementOptions from "./IElementOptions";
import IEffectOptions from "../../components/interface/IEffectOptions";
import Effect from "../../components/Effect";

export default interface ITextOptions extends IElementOptions {
    fontFamily?: string;  //文本字体集名称
    fontSize?: number | string;  //文本字体大小
    fontColor?: string;  //文本字体颜色
    fontWeight?: string;  //文本字体粗细
    fontStyle?: string;  //文本字体风格
    lineHeight?: number | string;  //文本行高
    wordSpacing?: number | string;  //文本字间距
    textAlign?: string;  //文本居中方式
    lineWrap?: boolean | string;  //文本是否自动换行
    textEnterEffect?: Effect | IEffectOptions;  //文本入场动效
    textExitEffect?: Effect | IEffectOptions;  //文本退场动效
    textShadow?: string;  //文本阴影
    textStroke?: string;  //文本描边
};
