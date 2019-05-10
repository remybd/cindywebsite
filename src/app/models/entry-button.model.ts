
export class EntryButtonModel{
  title: string = "";
  subtitle: string = "";
  type: string = "";
  imageUrl: string = "";
  link: string = "";

  constructor(title: string = "", subtitle : string = "", type : string = "",
              imageUrl : string = "", link : string = "") {
    this.title = title;
    this.subtitle = subtitle;
    this.type = type;
    this.imageUrl = imageUrl;
    this.link = link;
  }

}
