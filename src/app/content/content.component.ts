import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentDataMock} from "../datas/content-data.mock";
import {ContentPageModel} from "./models/content-page.model";
import {ContentMosaicModel} from './models/content-mosaic.model';
import {ContentImageModel} from './models/content-image.model';
import {ContentVideoModel} from './models/content-video.model';
import {ContentTypeManagerService} from '../structure/content-type-manager/content-type-manager.service';
import {HomeDataMock} from '../datas/home-data.mock';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content: ContentPageModel;

  searchBlockType = ContentMosaicModel.name;
  imageBlockType = ContentImageModel.name;
  videoBlockType = ContentVideoModel.name;

  nextPageKey = '';

  constructor(private route: ActivatedRoute,
              private contentTypeManager: ContentTypeManagerService) { }

  ngOnInit() {
    this.getContentFromUrl();
  }

  getContentFromUrl(): void {
    this.route.paramMap.subscribe(params => {
      const key = params.get("key");
      if(key && key in ContentDataMock.contentDataDic) {
        this.content = ContentDataMock.contentDataDic[key];
        this.getNextPageKey(key);
      }
    })
  }

  getNextPageKey(key: string) {
    console.log(key)
    const entryButton = this.contentTypeManager.next(key);
    console.log(entryButton)
    if(entryButton) {
      this.nextPageKey = entryButton.key;
    }
  }
}
