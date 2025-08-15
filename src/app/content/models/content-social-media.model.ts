import {ContentBlockModel} from './content-block.model';

export class ContentSocialMediaModel {
  title: string = "";
  subtitle: string = "";
  credits: string = "";
  blockList: ContentBlockModel[] = [];
  homeImageUrl: string = '';
  key: string = '';

  constructor(title: string, subtitle: string, credits: string, blockList: ContentBlockModel[], homeImageUrl: string, key: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.credits = credits;
    this.blockList = blockList;
    this.homeImageUrl = homeImageUrl;
    this.key = key;
  }
}
