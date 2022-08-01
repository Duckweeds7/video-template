import ISceneOptions from './interface/ISceneOptions';
import Base from './Base';
import Element from "./elements/Element";
import Transition from './components/Transition';
import Filter from "./components/Filter";
import util from './util';

export default class Scene extends Base {

    static type = "scene";
    readonly type = "scene";
    id = '';  //场景ID
    name?: string;  //场景名称
    poster?: string;  //场景封面图
    duration = 0;  //场景时长
    backgroundColor?: string;  //场景背景颜色
    transition?: Transition;  //场景转场效果
    filter?: Filter;  //场景滤镜
    children?: Element[] = [];  //场景子节点

    constructor(options: ISceneOptions) {
        super();
        this.optionsInject(options, {
            transition: Transition.create,
            filter: Filter.create,
            children: (v: any) => (v || []).map((options: any) => Element.create(options))
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

    static create(value: any) {
        if(util.isUndefined(value)) return value;
        return Scene.isInstance(value) ? value : new Scene(value);
    }

    static isInstance(value: any) {
        return value instanceof Scene;
    }

}