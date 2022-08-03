import IMediaOptions from "./IMediaOptions";

export default interface IAudioOptions extends IMediaOptions {
    isRecord?: boolean | string;  //音频是否为录音
    fadeInDuration?: number | string;  //音频淡入时长
    fadeOutDuration?: number | string;  //音频淡出时长
    sampleRate?: string;  //音频采样率
}
