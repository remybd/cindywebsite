import {ContentImageCommentModel} from "./content-image-comment.model";
import {ContentVideoCommentModel} from "./content-video-comment.model";

export class ContentSocialMediaModel {
  title = '';
  subtitle = '';
  credits = '';
  posts: ContentImageCommentModel[] | ContentVideoCommentModel[] = [];
  homeImageUrl = '';
  key = '';

  constructor(title: string, subtitle: string, credits: string,
              posts: ContentImageCommentModel[] | ContentVideoCommentModel[],
              homeImageUrl: string, key: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.credits = credits;
    this.posts = posts;
    this.homeImageUrl = homeImageUrl;
    this.key = key;
  }
}
