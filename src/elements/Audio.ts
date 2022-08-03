import IAudioOptions from './interface/IAudioOptions';
import Media from './Media';
import util from '../util';

export default class Audio extends Media {

    static type = Audio.Type.Subtitle;
    type = Audio.Type.Subtitle;
    isRecord?: boolean;  //音频是否为录音
    fadeInDuration?: number;  //音频淡入时长
    fadeOutDuration?: number;  //音频淡出时长

    constructor(options: IAudioOptions) {
        super(options);
        this.optionsInject(options, {
            isRecord: util.booleanParse,
            fadeInDuration: Number,
            fadeOutDuration: Number
        }, {
            isRecord: util.isBoolean,
            fadeInDuration: util.isFinite,
            fadeOutDuration: util.isFinite
        });
    }

    static isInstance(value: any) {
        return value instanceof Audio;
    }

}
