import {Component, inject, OnInit} from '@angular/core';
import {HomeDataMock} from "../../data/home-data.mock";
import {CategoryType} from "../../data/category";
import {ActivatedRoute, Router} from "@angular/router";
import {
  NextPreviousPageService
} from "../../structure/services/next-previous-page-management/next-previous-page.service";


@Component({
  selector: 'app-filtered-content-list',
  templateUrl: './filtered-content-list.component.html',
  styleUrl: './filtered-content-list.component.css',
  standalone: false
})
export class FilteredContentListComponent implements OnInit {
  entryButtonArray = [...HomeDataMock.entryButtonArray];
  contentPagePath = HomeDataMock.contentPagePath;
  category: CategoryType | undefined = undefined;

  router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  nextPreviousPageService: NextPreviousPageService = inject(NextPreviousPageService);

  ngOnInit() {
    this.nextPreviousPageService.currentPageKey = null;
    this.nextPreviousPageService.routePrefix = HomeDataMock.contentPagePath;
    this.getContentFromUrl();
  }

  getContentFromUrl(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');

      if (!category) {
        this.reset();
        return;
      }

      if (!(Object.values<string>(CategoryType).includes(category))) {
        return;
      }

      this.nextPreviousPageService.backRoute = '/home/' + category;
      this.category = category as CategoryType;
      this.filterBy(this.category);
    });
  }

  filterBy(category: CategoryType) {
    this.entryButtonArray = HomeDataMock.entryButtonArray.filter(entryButton => entryButton.categories.includes(category));
    this.nextPreviousPageService.keyList = this.entryButtonArray;
  }

  reset() {
    this.category = undefined;
    this.nextPreviousPageService.backRoute = '/';
    this.entryButtonArray = [...HomeDataMock.entryButtonArray];
    this.nextPreviousPageService.keyList = this.entryButtonArray;
  }
}
