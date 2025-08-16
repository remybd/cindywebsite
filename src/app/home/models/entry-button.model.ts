import {CategoryType} from '../../datas/category';

export class EntryButtonModel{
  title: string = "";
  subtitle: string = "";
  categories: CategoryType[] = [];
  imageUrl: string = "";
  key: string = "";
  lock: boolean = false;

  constructor(title: string = "", subtitle : string = "", categories : CategoryType[] = [],
              imageUrl : string = "", key : string = "", lock: boolean = false) {
    this.title = title;
    this.subtitle = subtitle;
    this.categories = categories;
    this.imageUrl = imageUrl;
    this.key = key;
    this.lock = lock;
  }

}
