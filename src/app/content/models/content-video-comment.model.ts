import {ContentBlockModel} from './content-block.model';

export class ContentVideoCommentModel extends ContentBlockModel {
  static readonly blockName = 'VIDEOCOMMENT';
  video = '';
  comment = '';
  type = '';

  constructor(video: string, comment: string, legend: string = '', type: string = 'video/mp4') {
    super(ContentVideoCommentModel.blockName, legend);
    this.video = video;
    this.comment = comment;
    this.type = type;
  }
}
