import {ContentImageModel} from "./content-image.model";
import {ContentBlockModel} from './content-block.model';

export class ContentPageModel{
  title: string = "";
  subtitle: string = "";
  credits: string = "";
  blockList: ContentBlockModel[] = [];
  lock: boolean = false;

  constructor(title: string, subtitle: string, credits: string, blockList: ContentBlockModel[], lock : boolean = false) {
    this.title = title;
    this.subtitle = subtitle;
    this.credits = credits;
    this.blockList = blockList;
    this.lock = lock;
  }
}
