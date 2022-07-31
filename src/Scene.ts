import ISceneOptions from './interface/ISceneOptions';
import ITransitionOptions from "./components/interface/ITransitionOptions";
import IFilterOptions from "./components/interface/IFilterOptions";
import Base from './Base';
import Transition from "./components/Transition";
import Filter from "./components/Filter";
import util from './util';

export default class Scene extends Base {

    id = '';  //场景ID
    name?: string;  //场景名称
    poster?: string;  //场景封面图
    duration = 0;  //场景时长
    backgroundColor?: string;  //场景背景颜色
    transition?: Transition | ITransitionOptions;  //场景转场效果
    filter?: Filter | IFilterOptions;  //场景滤镜
    children?: [] = [];  //场景子节点

    constructor(options: ISceneOptions) {
        super();
        this.optionsInject(options, {
            children: (v: any) => util.defaultTo(v, [])
            .map((options: any) => {})
        }, {
            id: util.isString,
            name: util.isString,
            poster: util.isString,
            duration: util.isFinite,
            backgroundColor: util.isString,
            transition: Transition.isInstance,
            filter: Filter.isInstance,
            children: util.isArray
        });
    }



}