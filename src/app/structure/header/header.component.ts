import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  @Input() logo = true;

  constructor() { }

  ngOnInit() {
  }

}
