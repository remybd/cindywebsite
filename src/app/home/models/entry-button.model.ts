import {ContentType} from '../../datas/content-type.enum';

export class EntryButtonModel{
  title: string = "";
  subtitle: string = "";
  type: ContentType = ContentType.empty;
  imageUrl: string = "";
  key: string = "";

  constructor(title: string = "", subtitle : string = "", type : ContentType = ContentType.empty,
              imageUrl : string = "", key : string = "") {
    this.title = title;
    this.subtitle = subtitle;
    this.type = type;
    this.imageUrl = imageUrl;
    this.key = key;
  }

}
