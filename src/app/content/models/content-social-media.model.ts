import {ContentImageCommentModel} from "./content-image-comment.model";

export class ContentSocialMediaModel {
  title = '';
  subtitle = '';
  credits = '';
  posts: ContentImageCommentModel[] = [];
  homeImageUrl = '';
  key = '';

  constructor(title: string, subtitle: string, credits: string, posts: ContentImageCommentModel[], homeImageUrl: string, key: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.credits = credits;
    this.posts = posts;
    this.homeImageUrl = homeImageUrl;
    this.key = key;
  }
}
