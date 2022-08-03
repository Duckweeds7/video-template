import IVoiceOptions from './interface/IVoiceOptions';
import Audio from './Audio';
import util from '../util';

export default class Voice extends Audio {

    static type = Audio.Type.Voice;
    type = Audio.Type.Voice;
    provider?: string;  //语音服务提供商
    text?: string;  //语音文本内容
    declaimer?: string;  //语音音色
    speechRate?: number;  //语音语速（0-2，默认1）
    pitchRate?: number;  //语音语调（0-2，默认1）

    constructor(options: IVoiceOptions) {
        super(options);
        this.optionsInject(options, {
            speechRate: Number,
            pitchRate: Number
        }, {
            provider: util.isString,
            text: util.isString,
            declaimer: util.isString,
            speechRate: util.isFinite,
            pitchRate: util.isFinite
        });
    }

    static isInstance(value: any) {
        return value instanceof Voice;
    }

}
