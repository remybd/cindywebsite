import {ContentImageModel} from './content-image.model';
import {ContentBlockModel} from './content-block.model';

export class ContentSearchModel extends ContentBlockModel{
  imageList: ContentImageModel[] = [];
  static readonly blockName = 'SEARCH';


  constructor(imageList: ContentImageModel[], legend: string = "") {
    super(ContentSearchModel.blockName, legend);
    this.imageList = imageList;
  }
}
