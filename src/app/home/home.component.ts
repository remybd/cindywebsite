import { Component, OnInit } from '@angular/core';
import {HomeDataMock} from "../datas/home-data.mock";
import {Title} from '@angular/platform-browser';
import {environment} from '../../environments/environment';
import {NextPreviousPageService} from '../structure/next-previous-page-management/next-previous-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  entryButtonArray = HomeDataMock.entryButtonArray;
  preCurrentPagePath = HomeDataMock.preCurrentPagePath;

  constructor(private titleService: Title,
              private nextPreviousPageService: NextPreviousPageService) { }

  ngOnInit() {
    this.titleService.setTitle(environment.titleBase + 'Home');
    this.nextPreviousPageService.currentPageKey = null;
  }

}
