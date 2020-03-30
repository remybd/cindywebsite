import {ContentImageModel} from './content-image.model';
import {ContentBlockModel} from './content-block.model';

export class ContentMosaicModel extends ContentBlockModel{
  imageList: ContentImageModel[] = [];
  static readonly blockName = 'MOSAIC';


  constructor(imageList: ContentImageModel[], legend: string = "") {
    super(ContentMosaicModel.blockName, legend);
    this.imageList = imageList;
  }
}
