import IElementOptions from "./elements/interface/IElementOptions";
import { Element } from "./elements";
import ElementTypes from "./enums/ElementTypes";
import util from "./util";

export default class ElementFactory {

    static createElement(data: IElementOptions) {
        if (!util.isObject(data)) throw new TypeError('data must be an Object');
        switch(data.type) {
            
        }
        return new Element(data);
    }

}