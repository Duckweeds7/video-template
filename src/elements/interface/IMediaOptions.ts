import IElementOptions from "./IElementOptions";

export default interface IMediaOptions extends IElementOptions {
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
};
