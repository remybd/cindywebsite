import {Component, HostListener, OnInit} from '@angular/core';
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

  constructor(private route: ActivatedRoute,
              private nextPreviousPageService: NextPreviousPageService,
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

        this.nextPreviousPageService.currentPageKey = key;
      }
    });
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    NextPreviousPageService.eventBinding[event.key](this.nextPreviousPageService)
  }
}
