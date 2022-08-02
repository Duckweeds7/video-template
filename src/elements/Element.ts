import IElementOptions from './interface/IElementOptions';
import Effect from '../components/Effect';
import Filter from '../components/Filter';
import ElementFactory from '../ElementFactory';
import ElementTypes from '../enums/ElementTypes';
import Base from '../Base';
import util from '../util';

export default class Element extends Base {

    static Type = ElementTypes;
    static type = ElementTypes.Element;
    type = ElementTypes.Element;
    id = '';  //元素ID
    name?: string;  //元素名称
    x?: number;  //元素横轴坐标
    y?: number;  //元素纵轴坐标
    width?: number;  //元素宽度
    height?: number;  //元素高度
    zIndex?: number;  //元素层级
    rotate?: number;  //元素旋转角度
    opacity?: number;  //元素透明度（0-1）
    scaleWidth?: number;  //元素宽度缩放因子
    scaleHeight?: number;  //元素高度缩放因子
    enterEffect?: Effect;  //元素入场动效
    exitEffect?: Effect;  //元素退场动效
    stayEffect?: Effect;  //元素驻留动效
    isBackground?: boolean;  //元素是否为背景
    backgroundColor?: string;  //元素背景颜色
    startTime?: number;  //元素入场时间点
    endTime?: number;  //元素退场时间点
    filter?: Filter;  //元素滤镜
    locked?: boolean;  //元素是否锁定
    trackId?: string;  //元素所在轨道ID
    value?: string;  //元素值
    children?: Element[] = [];  //元素子节点
    
    constructor(options: IElementOptions) {
        super();
        this.optionsInject(options, {
            x: Number,
            y: Number,
            width: Number,
            height: Number,
            zIndex: Number,
            rotate: Number,
            opacity: Number,
            scaleWidth: Number,
            scaleHeight: Number,
            enterEffect: Effect.create,
            exitEffect: Effect.create,
            stayEffect: Effect.create,
            isBackground: util.booleanParse,
            startTime: Number,
            endTime: Number,
            filter: Filter.create,
            locked: util.booleanParse,
            children: (v: any) => (v || []).map((options: any) => Element.create(options))
        }, {
            id: util.isString,
            name: util.isString,
            x: util.isFinite,
            y: util.isFinite,
            width: util.isFinite,
            height: util.isFinite,
            zIndex: util.isFinite,
            rotate: util.isFinite,
            opacity: util.isFinite,
            scaleWidth: util.isFinite,
            scaleHeight: util.isFinite,
            enterEffect: Effect.isInstance,
            exitEffect: Effect.isInstance,
            stayEffect: Effect.isInstance,
            isBackground: util.isBoolean,
            startTime: util.isFinite,
            endTime: util.isFinite,
            filter: Filter.isInstance,
            locked: util.isBoolean,
            trackId: util.isString,
            value: util.isString,
            children: util.isArray
        });
    }

    static create(value: any) {
        if(util.isUndefined(value)) return value;
        return Element.isInstance(value) ? value : ElementFactory.createElement(value);
    }

    static isInstance(value: any) {
        return value instanceof Element;
    }

}
