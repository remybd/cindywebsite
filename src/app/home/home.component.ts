import {Component, inject, OnInit} from '@angular/core';
import {NextPreviousPageService} from '../structure/services/next-previous-page-management/next-previous-page.service';
import {HomeDataMock} from "../data/home-data.mock";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false
})
export class HomeComponent implements OnInit {
  nextPreviousPageService: NextPreviousPageService = inject(NextPreviousPageService);

  ngOnInit() {
    this.nextPreviousPageService.currentPageKey = null;
    this.nextPreviousPageService.keyList = HomeDataMock.entryButtonArray;
  }
}
