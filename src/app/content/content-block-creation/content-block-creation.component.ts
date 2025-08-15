import {Component, Input, OnInit} from '@angular/core';
import {ContentBlockModel} from '../models/content-block.model';
import {ContentSearchModel} from '../models/content-search.model';
import {ContentImageModel} from '../models/content-image.model';
import {ContentVideoModel} from '../models/content-video.model';
import {ContentLegendModel} from '../models/content-legend.model';

@Component({
    selector: 'app-content-block-creation',
    templateUrl: './content-block-creation.component.html',
    styleUrls: ['./content-block-creation.component.css'],
    standalone: false
})
export class ContentBlockCreationComponent implements OnInit {
  @Input() blockList: ContentBlockModel[] = [];

  searchBlockType = ContentSearchModel.blockName;
  imageBlockType = ContentImageModel.blockName;
  videoBlockType = ContentVideoModel.blockName;
  legendBlockType = ContentLegendModel.blockName;

  constructor() { }

  ngOnInit(): void {
  }

}
