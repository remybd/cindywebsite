import {Component, Input, OnInit} from '@angular/core';
import {HomeDataMock} from '../../../datas/home-data.mock';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  @Input() next = '';
  @Input() previous = '';

  constructor() { }

  ngOnInit() {
  }

}
