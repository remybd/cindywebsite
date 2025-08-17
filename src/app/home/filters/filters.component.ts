import {Component, inject} from '@angular/core';
import {CategoryType} from "../../data/category";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
  imports: [RouterModule]
})
export class FiltersComponent {
  categories = Object.values(CategoryType);
  router = inject(Router);
  categoryType = CategoryType;
}
