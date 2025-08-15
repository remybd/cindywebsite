import {CategoryType} from '../../datas/category';

export class EntryButtonModel{
  title: string = "";
  subtitle: string = "";
  type: CategoryType = CategoryType.empty;
  imageUrl: string = "";
  key: string = "";
  lock: boolean = false;

  constructor(title: string = "", subtitle : string = "", type : CategoryType = CategoryType.empty,
              imageUrl : string = "", key : string = "", lock: boolean = false) {
    this.title = title;
    this.subtitle = subtitle;
    this.type = type;
    this.imageUrl = imageUrl;
    this.key = key;
    this.lock = lock
  }

}
