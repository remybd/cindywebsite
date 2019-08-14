import {ContentBlockModel} from './content-block.model';

export class ContentVideoModel extends ContentBlockModel {
  url: string = '';
  type: string = '';

  constructor(url: string, legend: string = "", type: string = "video/mp4") {
    super(legend);
    this.url = url;
    this.type = type;
  }
}
