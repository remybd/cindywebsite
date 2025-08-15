import {Component, Input, OnInit} from '@angular/core';
import {ContentLegendModel} from '../../models/content-legend.model';

@Component({
    selector: 'app-block-legend',
    templateUrl: './block-legend.component.html',
    styleUrls: ['./block-legend.component.css'],
    standalone: false
})
export class BlockLegendComponent implements OnInit {
  @Input() legendBlock: ContentLegendModel;

  constructor() { }

  ngOnInit(): void {
  }

}
