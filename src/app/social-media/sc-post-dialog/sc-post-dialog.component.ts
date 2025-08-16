import {Component, HostListener, inject, model, OnInit} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {SocialMediaDataMock} from "../../datas/social-media.mock";
import {ContentPageModel} from "../../content/models/content-page.model";
import {
  NextPreviousPageService
} from "../../structure/services/next-previous-page-management/next-previous-page.service";
import {Title} from "@angular/platform-browser";
import {PasswordStorageService} from "../../structure/services/password-storage.service";
import {ContentDataMock} from "../../datas/content-data.mock";
import {environment} from "../../../environments/environment";
import {ContentSocialMediaModel} from "../../content/models/content-social-media.model";

@Component({
  selector: 'app-sc-post-dialog',
  templateUrl: './sc-post-dialog.component.html',
  styleUrl: './sc-post-dialog.component.css',
  standalone: false
})
export class ScPostDialogComponent implements OnInit{
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);
  data = inject(DIALOG_DATA);
  content: ContentSocialMediaModel;

  constructor(private route: ActivatedRoute,
              private nextPreviousPageService: NextPreviousPageService,
              private titleService: Title) {

  }

  ngOnInit() {
    this.getContentFromKey();
  }

  getContentFromKey(): void {
    if (!this.data.key || !(this.data.key in SocialMediaDataMock.socialMediaDic)) {
      return;
    }
    this.content = SocialMediaDataMock.socialMediaDic[this.data.key];
    this.titleService.setTitle(environment.titleBase + this.content.title);

    this.nextPreviousPageService.currentPageKey = this.data.key;
  }

  // @HostListener('window:keyup', ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   NextPreviousPageService.eventBinding[event.key](this.nextPreviousPageService);
  // }
  //
  // swipeRight() {
  //   this.nextPreviousPageService.previousPage();
  // }
  //
  // swipeLeft() {
  //   this.nextPreviousPageService.nextPage();
  // }
}
