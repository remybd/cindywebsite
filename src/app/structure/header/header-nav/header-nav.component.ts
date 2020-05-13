import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NextPreviousPageService} from '../../next-previous-page-management/next-previous-page.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  nextPage$: Observable<string | null>;
  previousPage$: Observable<string | null>;

  constructor(private nextPreviousPageService: NextPreviousPageService) {}

  ngOnInit() {
    this.nextPage$ = this.nextPreviousPageService.nextPage$
    this.previousPage$ = this.nextPreviousPageService.previousPage$
  }

  next() {
    this.nextPreviousPageService.nextPage();
  }

  previous() {
    this.nextPreviousPageService.previousPage();
  }


}
