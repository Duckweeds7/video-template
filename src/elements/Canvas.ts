import ICanvasOptions from './interface/ICanvasOptions';
import Element from './Element';

export default class Canvas extends Element {

    static type = Element.Type.Canvas;
    type = Element.Type.Canvas;

    constructor(options: ICanvasOptions) {
        super(options);
        this.optionsInject(options, {}, {
            
        });
    }

    static isInstance(value: any) {
        return value instanceof Canvas;
    }

}
