import IMediaOptions from "./IMediaOptions";
import ICropOptions from "../components/interface/ICropOptions";
import Crop from "../components/Crop";

export default interface IVideoOptions extends IMediaOptions {
    crop?: Crop | ICropOptions;
};
