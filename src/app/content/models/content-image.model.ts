import {ContentBlockModel} from './content-block.model';

export class ContentImageModel extends ContentBlockModel {
  url: string = '';

  constructor(url: string, legend: string = "") {
    super(legend);
    this.url = url;
  }
}
