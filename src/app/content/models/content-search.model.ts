import {ContentImageModel} from './content-image.model';
import {ContentBlockModel} from './content-block.model';

export class ContentSearchModel extends ContentBlockModel{
  imageList: ContentImageModel[] = [];

  constructor(imageList: ContentImageModel[], legend: string = "Recherches") {
    super(legend);
    this.imageList = imageList;
  }
}
