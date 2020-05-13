import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  @Input() next = '';
  @Input() previous = '';

  static eventBinding = {
    ArrowRight: HeaderNavComponent.nextPageStatic,
    ArrowLeft: HeaderNavComponent.previousPageStatic
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  previousPage() {
    this.router.navigateByUrl('/content/' + this.previous);
  }

  static previousPageStatic(instance) {
    instance.previousPage();
  }

  nextPage() {
    this.router.navigateByUrl('/content/' + this.next);
  }

  static nextPageStatic(instance) {
    instance.nextPage();
  }


  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    HeaderNavComponent.eventBinding[event.key](this)
  }
}
