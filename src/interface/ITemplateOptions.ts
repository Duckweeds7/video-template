export default interface ITemplateOptions {
    type?: string;  //模板类型
    version?: string;  //模板版本号
    id?: number;  //模板ID
    name?: string;  //模板名称
    poster?: string;  //模板封面图URL
    width?: number | string;  //模板宽度
    height?: number | string;  //模板高度
    aspectRatio?: string;  //模板比例
    fps?: number | string;  //视频帧率
    backgroundColor?: string;  //模板背景色
    frameQuality?: number | string;  //视频帧图质量
    pixelFormat?: string;  //视频像素格式
    videoCodec?: string;  //视频编码器
    videoBitrate?: string;  //视频码率
    audioCodec?: string;  //音频编码器
    audioSampleRate?: string; //音频采样率
    audioBitrate?: string;  //音频码率
    outputFormat?: string;  //输出视频格式
    others?: object;  //模板其它信息对象
    createTime?: number | string;  //模板创建时间戳
    updateTime?: number | string;  //模板更新时间戳
    children?: [];  //模板子节点
}
