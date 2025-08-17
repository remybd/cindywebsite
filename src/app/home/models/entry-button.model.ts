import {CategoryType} from '../../data/category';
import {Key} from "../../structure/model/key";

export class EntryButtonModel implements Key {
  title = '';
  subtitle = '';
  categories: CategoryType[] = [];
  imageUrl = '';
  key = '';
  lock = false;

  constructor(title: string = '', subtitle: string = '', categories: CategoryType[] = [],
              imageUrl: string = '', key: string = '', lock: boolean = false) {
    this.title = title;
    this.subtitle = subtitle;
    this.categories = categories;
    this.imageUrl = imageUrl;
    this.key = key;
    this.lock = lock;
  }

}
