import {ContentBlockModel} from './content-block.model';

export class ContentVideoModel extends ContentBlockModel {
  url = '';
  type = '';
  loop = false;
  muted = false;
  static readonly blockName = 'VIDEO';


  constructor(url: string, legend = '', type = 'video/mp4', loop = false, muted = false) {
    super(ContentVideoModel.blockName, legend);
    this.url = url;
    this.type = type;
    this.loop = loop;
    this.muted = muted;
  }
}
