import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentDataMock} from "../mocks/content-data.mock";
import {ContentPageModel} from "./models/content-page.model";
import {ContentSearchModel} from './models/content-search.model';
import {ContentImageModel} from './models/content-image.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content: ContentPageModel;

  searchBlockType = ContentSearchModel.name;
  imageBlockType = ContentImageModel.name;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getContentFromUrl();
  }

  getContentFromUrl(): void {
    this.route.paramMap.subscribe(params => {
      const key = params.get("key");
      if(key && key in ContentDataMock.contentDataDic) {
        this.content = ContentDataMock.contentDataDic[key];
      }
    })
  }
}
