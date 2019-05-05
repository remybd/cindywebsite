import { Component, OnInit } from '@angular/core';
import {MockData} from "../models/mock.data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  entryButtonArray = MockData.entryButtonArray;
  constructor() { }

  ngOnInit() {
  }

}
