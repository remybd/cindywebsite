import {ContentBlockModel} from './content-block.model';

export class ContentLegendModel extends ContentBlockModel {
  static readonly blockName = 'LEGEND';
  blockList: ContentBlockModel[] = [];

  constructor(blockList: ContentBlockModel[] = [], legend: string = '') {
    super(ContentLegendModel.blockName, legend);
    this.blockList = blockList;
  }
}
