import Audio from './Audio';

export default class Voice extends Audio {

    static isInstance(value: any) {
        return value instanceof Voice;
    }

}
