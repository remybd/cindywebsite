import {Component, Input, OnInit} from '@angular/core';
import {ContentSearchModel} from '../../models/content-search.model';

@Component({
  selector: 'app-block-search',
  templateUrl: './block-search.component.html',
  styleUrls: ['./block-search.component.css']
})
export class BlockSearchComponent implements OnInit {
  @Input() search: ContentSearchModel;

  constructor() { }

  ngOnInit() {
  }

}
