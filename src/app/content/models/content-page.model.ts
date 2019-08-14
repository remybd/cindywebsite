import {ContentImageModel} from "./content-image.model";
import {ContentBlockModel} from './content-block.model';

export class ContentPageModel{
  title: string = "";
  subtitle: string = "";
  credits: string = "";
  blockList: ContentBlockModel[] = [];

  constructor(title: string, subtitle: string, credits: string, blockList: ContentBlockModel[]) {
    this.title = title;
    this.subtitle = subtitle;
    this.credits = credits;
    this.blockList = blockList;
  }
}
