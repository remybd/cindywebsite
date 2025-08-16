import {Component, inject, OnInit} from '@angular/core';
import {HomeDataMock} from "../../datas/home-data.mock";
import {CategoryType} from "../../datas/category";
import {ActivatedRoute, Router} from "@angular/router";


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

  ngOnInit() {
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

      this.category = category as CategoryType;
      this.filterBy(this.category);
    });
  }

  filterBy(category: CategoryType) {
    this.entryButtonArray = HomeDataMock.entryButtonArray.filter(entryButton => entryButton.categories.includes(category));
  }

  reset() {
    this.category = undefined;
    this.entryButtonArray = [...HomeDataMock.entryButtonArray];
  }
}
