import {Component, inject, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {
  NextPreviousPageService
} from "../../../structure/services/next-previous-page-management/next-previous-page.service";

@Component({
  selector: 'app-content-footer-navigation',
  templateUrl: './content-footer-navigation.component.html',
  styleUrls: ['../../../structure/header/header-nav/header-nav.component.css', './content-footer-navigation.component.css'],
  standalone: false
})
export class ContentFooterNavigationComponent implements OnInit {
  @Input() backRoute = '/';
  nextPage$: Observable<string | null>;
  previousPage$: Observable<string | null>;
  nextPreviousPageService = inject(NextPreviousPageService);

  ngOnInit() {
    this.nextPage$ = this.nextPreviousPageService.nextPage$;
    this.previousPage$ = this.nextPreviousPageService.previousPage$;
  }

  next() {
    this.nextPreviousPageService.nextPage();
  }

  previous() {
    this.nextPreviousPageService.previousPage();
  }

}
