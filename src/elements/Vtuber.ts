import Video from './Video';

export default class Vtuber extends Video {

    static isInstance(value: any) {
        return value instanceof Vtuber;
    }

}
