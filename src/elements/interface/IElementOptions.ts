import IEffectOptions from "../../components/interface/IEffectOptions";
import Effect from "../../components/Effect";
import Element from "../Element";

export default interface IElementOptions {
    id: string;  //元素ID
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
    enterEffect?: Effect | IEffectOptions;  //元素入场动效
    exitEffect?: Effect | IEffectOptions;  //元素退场动效
    stayEffect?: Effect | IEffectOptions;  //元素驻留动效
    isBackground?: boolean;  //元素是否为背景
    backgroundColor?: string;  //元素背景颜色
    startTime?: number;  //元素入场时间点
    endTime?: number;  //元素退场时间点
    locked?: boolean;  //元素是否锁定
    trackId?: string;  //元素所在轨道ID
    value?: string;  //元素值
    children?: (Element | IElementOptions)[];  //元素子节点
};
