import ITemplateOptions from "./interface/ITemplateOptions";
import IFilterOptions from "./components/interface/IFilterOptions";
import Base from "./Base";
import util from './util';

export default class Template extends Base {

    type?: string;  //模板类型
    version?: string;  //模板版本号
    id = '';  //模板ID
    name?: string;  //模板名称
    poster?: string;  //模板封面图URL
    width = 0;  //模板宽度
    height = 0;  //模板高度
    aspectRatio?: string;  //模板比例
    fps?: number;  //视频帧率
    backgroundColor?: string;  //模板背景色
    frameQuality?: number;  //视频帧图质量
    pixelFormat?: string;  //视频像素格式
    videoCodec?: string;  //视频编码器
    videoBitrate?: string;  //视频码率
    audioCodec?: string;  //音频编码器
    audioSampleRate?: string; //音频采样率
    audioBitrate?: string;  //音频码率
    outputFormat?: string;  //输出视频格式
    others?: object;  //模板其它信息对象
    filter?: IFilterOptions;  //模板滤镜
    createTime?: number;  //模板创建时间戳
    updateTime?: number;  //模板更新时间戳
    children?: [] = [];  //模板子节点

    constructor(options: ITemplateOptions) {
        super();
        this.optionsInject(options, {
            width: Number,
            height: Number,
            fps: (v: any) => Number(util.defaultTo(v, 60)),
            frameQuality: Number,
            createTime: Number,
            updateTime: Number,
            children: (v: any) => util.defaultTo(v, [])
            .map((options: any) => {})
        }, {
            type: util.isString,
            version: util.isString,
            id: util.isString,
            name: util.isString,
            poster: util.isString,
            width: util.isFinite,
            height: util.isFinite,
            aspectRatio: util.isString,
            fps: util.isFinite,
            backgroundColor: util.isString,
            frameQuality: util.isFinite,
            pixelFormat: util.isString,
            videoCodec: util.isString,
            videoBitrate: util.isString,
            audioCodec: util.isString,
            audioSampleRate: util.isString,
            audioBitrate: util.isString,
            outputFormat: util.isString,
            others: util.isObject,
            createTime: util.isUnixTimestamp,
            updateTime: util.isUnixTimestamp,
            children: util.isArray
        });
    }



}
