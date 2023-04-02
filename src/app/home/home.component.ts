import {Component, OnInit} from '@angular/core';
import {HomeDataMock} from "../datas/home-data.mock";
import {NextPreviousPageService} from '../structure/services/next-previous-page-management/next-previous-page.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  entryButtonArray = HomeDataMock.entryButtonArray;
  preCurrentPagePath = HomeDataMock.preCurrentPagePath;

  constructor(private nextPreviousPageService: NextPreviousPageService) { }

  ngOnInit() {
    this.nextPreviousPageService.currentPageKey = null;
  }

}
