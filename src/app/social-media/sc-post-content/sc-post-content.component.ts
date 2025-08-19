import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NextPreviousPageService
} from "../../structure/services/next-previous-page-management/next-previous-page.service";
import {Title} from "@angular/platform-browser";
import {SocialMediaDataMock} from "../../data/social-media.mock";
import {environment} from "../../../environments/environment";
import {ContentSocialMediaModel} from "../../content/models/content-social-media.model";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {ContentImageModel} from "../../content/models/content-image.model";
import {ContentVideoModel} from "../../content/models/content-video.model";
import {ContentImageCommentModel} from "../../content/models/content-image-comment.model";
import {ContentVideoCommentModel} from "../../content/models/content-video-comment.model";
import {filter, map, Observable} from "rxjs";

@Component({
  selector: 'app-sc-post-content',
  templateUrl: './sc-post-content.component.html',
  styleUrls: ['../../content/content.component.css', './sc-post-content.component.css'],
  standalone: false
})
export class ScPostContentComponent implements OnInit {
  nextPreviousPageService = inject(NextPreviousPageService);
  titleService = inject(Title);
  router = inject(Router);
  route = inject(ActivatedRoute);
  contentKey = '';
  content: ContentSocialMediaModel;
  carouselIndex = 0;

  ngOnInit(): void {
    SocialMediaDataMock.setupNextPreviousService(this.nextPreviousPageService);
    this.getContentFromUrl();
  }

  getContentFromUrl(): void {
    this.route.paramMap.subscribe(params => {
      this.contentKey = params.get('key');
      this.getContentFromKey();
    });
  }

  getContentFromKey(): void {
    if (!this.contentKey || !(this.contentKey in SocialMediaDataMock.socialMediaDic)) {
      return;
    }
    this.content = SocialMediaDataMock.socialMediaDic[this.contentKey];
    this.titleService.setTitle(environment.titleBase + this.content.title);

    this.nextPreviousPageService.currentPageKey = this.contentKey;
    this.carouselIndex = 0;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.nextPreviousPageService.keyEvent(event);
  }

  swipeRight() {
    this.nextPreviousPageService.previousPage();
  }

  swipeLeft() {
    this.nextPreviousPageService.nextPage();
  }

}
