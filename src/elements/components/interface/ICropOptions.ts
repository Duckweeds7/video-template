export default interface ICropOptions {
    x: number | string;  //裁剪起始横轴坐标
    y: number | string;  //裁剪起始纵轴坐标
    width: number | string;  //裁剪宽度
    height: number | string;  //裁剪高度
    style?: string;  //裁剪样式
};
