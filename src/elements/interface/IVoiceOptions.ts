import IAudioOptions from "./IAudioOptions";

export default interface IVoiceOptions extends IAudioOptions {
    provider?: string;  //语音服务提供商
    text?: string;  //语音文本内容
    declaimer?: string;  //语音音色
    speechRate?: number | string;  //语音语速（0-2，默认1）
    pitchRate?: number | string;  //语音语调（0-2，默认1）
};
