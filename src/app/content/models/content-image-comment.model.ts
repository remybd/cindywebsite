import {ContentBlockModel} from './content-block.model';

export class ContentImageCommentModel extends ContentBlockModel {
  static readonly blockName = 'IMAGECOMMENT';
  image = '';
  comment = '';

  constructor(image: string, comment: string, legend: string = '') {
    super(ContentImageCommentModel.blockName, legend);
    this.image = image;
    this.comment = comment;
  }
}
