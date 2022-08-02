import ITextOptions from './interface/ITextOptions';
import Effect from '../components/Effect';
import Element from './Element';
import util from '../util';

export default class Text extends Element {

    static type = Element.Type.Text;
    type = Element.Type.Text;
    fontFamily?: string;  //文本字体集名称
    fontSize?: number;  //文本字体大小
    fontColor?: string;  //文本字体颜色
    fontWeight?: string;  //文本字体粗细
    fontStyle?: string;  //文本字体风格
    lineHeight?: number;  //文本行高
    wordSpacing?: number;  //文本字间距
    textAlign?: string;  //文本居中方式
    lineWrap?: boolean;  //文本是否自动换行
    textEnterEffect?: Effect;  //文本入场动效
    textExitEffect?: Effect;  //文本退场动效
    textShadow?: string;  //文本阴影
    textStroke?: string;  //文本描边

    constructor(options: ITextOptions) {
        super(options);
        this.optionsInject(options, {
            fontSize: Number,
            lineHeight: Number,
            wordSpacing: Number,
            lineWrap: util.booleanParse,
            textEnterEffect: Effect.create,
            textExitEffect: Effect.create
        }, {
            fontFamily: util.isString,
            fontSize: util.isFinite,
            fontColor: util.isString,
            fontWeight: util.isString,
            fontStyle: util.isString,
            lineHeight: util.isFinite,
            wordSpacing: util.isFinite,
            textAlign: util.isString,
            lineWrap: util.isBoolean,
            textEnterEffect: Effect.isInstance,
            textExitEffect: Effect.isInstance,
            textShadow: util.isString,
            textStroke: util.isString
        });
    }

    static isInstance(value: any) {
        return value instanceof Text;
    }

}
