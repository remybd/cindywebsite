import {Component, HostBinding, Input, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() imageUrl: string = "";

  constructor(private sanitizer: DomSanitizer) { }

  @HostBinding("attr.style")
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--image-url: ${'url('+ this.imageUrl +')'}`);
  }


  ngOnInit() {
  }


}
