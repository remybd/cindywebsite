import {ContentImageModel} from './content-image.model';
import {ContentBlockModel} from './content-block.model';

export class ContentMosaicModel extends ContentBlockModel{
  imageList: ContentImageModel[] = [];

  constructor(imageList: ContentImageModel[], legend: string = "") {
    super(legend);
    this.imageList = imageList;
  }
}
