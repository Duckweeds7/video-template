import IMediaOptions from './interface/IMediaOptions';
import Element from './Element';
import util from '../util';

export default class Media extends Element {

    static type = Element.Type.Media;
    type = Element.Type.Media;
    poster?: string;  //媒体封面
    src?: string;  //媒体来源
    path?: string;  //媒体路径
    volume?: number | string;  //媒体音量
    format?: string;  //媒体格式
    duration?: number | string;  //媒体时长（毫秒）
    seekStart?: number | string;  //媒体截取开始时间点（毫秒）
    seekEnd?: number | string;  //媒体截取结束时间点（毫秒）
    loop?: boolean | string;  //媒体是否循环播放
    playbackRate?: number | string;  //媒体播放倍速（0-2，默认1）
    muted?: boolean | string;  //媒体是否静音

    constructor(options: IMediaOptions) {
        super(options);
        this.optionsInject(options, {
            volume: Number,
            duration: Number,
            seekStart: Number,
            seekEnd: Number,
            loop: util.booleanParse,
            playbackRate: Number,
            muted: util.booleanParse
        }, {
            poster: util.isString,
            src: util.isString,
            path: util.isString,
            volume: util.isFinite,
            format: util.isString,
            duration: util.isFinite,
            seekStart: util.isFinite,
            seekEnd: util.isFinite,
            loop: util.isBoolean,
            playbackRate: util.isFinite,
            muted: util.isFinite
        });
    }

    static isInstance(value: any) {
        return value instanceof Media;
    }

}
