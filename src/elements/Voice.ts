import Audio from './Audio';

export default class Voice extends Audio {

    static type = Audio.Type.Voice;
    type = Audio.Type.Voice;

    static isInstance(value: any) {
        return value instanceof Voice;
    }

}
