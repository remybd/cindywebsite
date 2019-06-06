import {ContentImageModel} from "./content-image.model";

export class ContentModel{
  title: string = "";
  subtitle: string = "";
  credits: string = "";
  imageList: ContentImageModel[] = [];

  constructor(title: string, subtitle: string, credits: string, imageList: ContentImageModel[]) {
    this.title = title;
    this.subtitle = subtitle;
    this.credits = credits;
    this.imageList = imageList;
  }
}
