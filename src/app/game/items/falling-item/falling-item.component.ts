import {Component, Input, OnInit} from '@angular/core';
import {FallingItem} from "./falling-item.model";

@Component({
  selector: 'app-falling-item',
  templateUrl: './falling-item.component.html',
  styleUrls: ['./falling-item.component.css']
})
export class FallingItemComponent implements OnInit {
  @Input("fallingItem") item : FallingItem = new FallingItem();

  constructor() { }

  ngOnInit() {
  }

}
