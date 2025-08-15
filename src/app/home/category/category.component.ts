import {Component, OnInit} from '@angular/core';
import {HomeDataMock} from "../../datas/home-data.mock";
import {CategoryType} from "../../datas/category";
import {AppModule} from "../../app.module";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {
  NextPreviousPageService
} from "../../structure/services/next-previous-page-management/next-previous-page.service";
import {Title} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";
import {AppRoutingModule} from "../../app-routing.module";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  standalone: false
})
export class CategoryComponent implements OnInit{
  entryButtonArray = [...HomeDataMock.entryButtonArray];
  contentType = Object.values(CategoryType);
  contentPagePath = HomeDataMock.contentPagePath;
  categoryPagePath = HomeDataMock.categoryPagePath;
  category: CategoryType | undefined = undefined;

  constructor(private route: ActivatedRoute,
              private titleService: Title) {
  }

  ngOnInit() {
    this.getContentFromUrl();
  }

  getContentFromUrl(): void {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');

      if (!category) {
        this.category = undefined;
        this.entryButtonArray = [...HomeDataMock.entryButtonArray];
        return;
      }

      if (!(Object.values<string>(CategoryType).includes(category))) {
        return;
      }

      this.category = category as CategoryType;
      console.log(category, this.category);
      this.filterBy(this.category);
      this.titleService.setTitle(environment.titleBase + this.category);
    });
  }

  filterBy(category: CategoryType) {
    this.entryButtonArray = HomeDataMock.entryButtonArray.filter(entryButton => entryButton.type === category);
  }

  reset() {
    this.entryButtonArray = [...HomeDataMock.entryButtonArray];
  }


}
