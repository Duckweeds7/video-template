import ITextOptions from './interface/ITextOptions';
import Element from './Element';

export default class Text extends Element {

    static type = Element.Type.Text;
    type = Element.Type.Text;

    constructor(options: ITextOptions) {
        super(options);
    }

    static isInstance(value: any) {
        return value instanceof Text;
    }

}
