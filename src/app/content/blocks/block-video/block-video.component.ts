import {Component, Input, OnInit} from '@angular/core';
import {ContentVideoModel} from '../../models/content-video.model';

@Component({
    selector: 'app-block-video',
    templateUrl: './block-video.component.html',
    styleUrls: ['./block-video.component.css'],
    standalone: false
})
export class BlockVideoComponent implements OnInit {
  @Input() video: ContentVideoModel;

  constructor() { }

  ngOnInit() {
  }

}
