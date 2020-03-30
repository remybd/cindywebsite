import {ContentBlockModel} from './content-block.model';

export class ContentVideoModel extends ContentBlockModel {
  url: string = '';
  type: string = '';
  static readonly blockName = 'VIDEO';


  constructor(url: string, legend: string = "", type: string = "video/mp4") {
    super(ContentVideoModel.blockName, legend);
    this.url = url;
    this.type = type;
  }
}
