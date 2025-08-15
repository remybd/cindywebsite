import {Component, Input, OnInit} from '@angular/core';
import {ContentImageModel} from '../../models/content-image.model';

@Component({
    selector: 'app-block-image',
    templateUrl: './block-image.component.html',
    styleUrls: ['./block-image.component.css'],
    standalone: false
})
export class BlockImageComponent implements OnInit {
  @Input() img: ContentImageModel;

  constructor() { }

  ngOnInit() {
  }

}
