import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentDataMock} from '../datas/content-data.mock';
import {ContentPageModel} from './models/content-page.model';
import {NextPreviousPageService} from '../structure/next-previous-page-management/next-previous-page.service';
import {environment} from '../../environments/environment';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content: ContentPageModel;
  nextPageKey = '';
  previousPageKey = '';

  constructor(private route: ActivatedRoute,
              private contentTypeManager: NextPreviousPageService,
              private titleService: Title) {
  }

  ngOnInit() {
    this.getContentFromUrl();
  }

  getContentFromUrl(): void {
    this.route.paramMap.subscribe(params => {
      const key = params.get('key');
      if (key && key in ContentDataMock.contentDataDic) {
        this.content = ContentDataMock.contentDataDic[key];
        this.titleService.setTitle(environment.titleBase + this.content.title);

        this.getNextPageKey(key);
        this.getPreviousPageKey(key);
      }
    });
  }

  getNextPageKey(key: string) {
    const entryButton = this.contentTypeManager.nextInHomePage(key);
    this.nextPageKey = entryButton?.key;
    console.log('next ', this.nextPageKey)

  }

  getPreviousPageKey(key: string) {
    const entryButton = this.contentTypeManager.previousInHomePage(key);
    this.previousPageKey = entryButton?.key;
    console.log('previous ', this.previousPageKey)
  }
}
