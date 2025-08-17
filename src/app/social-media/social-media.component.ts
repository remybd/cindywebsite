import {Component, inject, OnInit} from '@angular/core';
import {SocialMediaDataMock} from "../data/social-media.mock";
import {HomeDataMock} from "../data/home-data.mock";
import {NextPreviousPageService} from "../structure/services/next-previous-page-management/next-previous-page.service";


@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
  standalone: false
})
export class SocialMediaComponent implements OnInit{
  socialMedias = Object.values(SocialMediaDataMock.socialMediaDic);
  socialMediaPath = HomeDataMock.socialMediaPath;
  nextPreviousPageService: NextPreviousPageService = inject(NextPreviousPageService);

  ngOnInit() {
    this.nextPreviousPageService.currentPageKey = null;
    SocialMediaDataMock.setupNextPreviousService(this.nextPreviousPageService);
  }


}
