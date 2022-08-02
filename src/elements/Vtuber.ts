import Canvas from './Canvas';

export default class Vtuber extends Canvas {

    static type = Canvas.Type.Vtuber;
    type = Canvas.Type.Vtuber;

    static isInstance(value: any) {
        return value instanceof Vtuber;
    }

}
