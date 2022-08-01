import ITransitionOptions from "../components/interface/ITransitionOptions";
import IFilterOptions from "../components/interface/IFilterOptions";
import IElementOptions from "../elements/interface/IElementOptions";
import Transition from "../components/Transition";
import Filter from "../components/Filter";
import Element from "../elements/Element";

export default interface ISceneOptions {
    id: string;  //场景ID
    name?: string;  //场景名称
    poster?: string;  //场景封面图
    duration: number | string;  //场景时长
    backgroundColor?: string;  //场景背景颜色
    transition?: Transition | ITransitionOptions;  //场景转场效果
    filter?: Filter | IFilterOptions;  //场景滤镜
    children?: (Element | IElementOptions)[];  //场景子节点
}
