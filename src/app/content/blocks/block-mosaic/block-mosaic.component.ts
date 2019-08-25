import {Component, Input, OnInit} from '@angular/core';
import {ContentMosaicModel} from '../../models/content-mosaic.model';

@Component({
  selector: 'app-block-search',
  templateUrl: './block-mosaic.component.html',
  styleUrls: ['./block-mosaic.component.css']
})
export class BlockMosaicComponent implements OnInit {
  @Input() search: ContentMosaicModel;

  constructor() { }

  ngOnInit() {
  }

}
