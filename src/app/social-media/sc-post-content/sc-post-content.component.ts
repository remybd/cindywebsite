import {Component, HostListener, inject, OnInit} from '@angular/core';
import {
  NextPreviousPageService
} from "../../structure/services/next-previous-page-management/next-previous-page.service";
import {Title} from "@angular/platform-browser";
import {SocialMediaDataMock} from "../../data/social-media.mock";
import {environment} from "../../../environments/environment";
import {ContentSocialMediaModel} from "../../content/models/content-social-media.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sc-post-content',
  templateUrl: './sc-post-content.component.html',
  styleUrls: ['../../content/content.component.css', './sc-post-content.component.css'],
  standalone: false
})
export class ScPostContentComponent implements OnInit{
  nextPreviousPageService = inject(NextPreviousPageService);
  titleService = inject(Title);
  router = inject(Router);
  route = inject(ActivatedRoute);
  contentKey = '';
  content: ContentSocialMediaModel;

  ngOnInit(): void {
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
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    NextPreviousPageService.eventBinding[event.key](this.nextPreviousPageService);
  }

  swipeRight() {
    this.nextPreviousPageService.previousPage();
  }

  swipeLeft() {
    this.nextPreviousPageService.nextPage();
  }
}
