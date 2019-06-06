import { Component, OnInit } from '@angular/core';
import {HomeDataMock} from "../models/mocks/home-data.mock";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  entryButtonArray = HomeDataMock.entryButtonArray;
  constructor() { }

  ngOnInit() {
  }

}
