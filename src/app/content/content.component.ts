import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContentDataMock} from "../models/mocks/content-data.mock";
import {ContentModel} from "../models/content.model";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  content: ContentModel;

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
