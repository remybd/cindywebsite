import {ContentBlockModel} from './content-block.model';

export class ContentImageModel extends ContentBlockModel {
  url: string = '';
  static readonly blockName = 'IMAGE';

  constructor(url: string, legend: string = "") {
    super(ContentImageModel.blockName, legend);
    this.url = url;
  }
}
