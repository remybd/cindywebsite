import {Component, HostBinding, Input, OnChanges, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-button-moving-dashes',
  templateUrl: './button-moving-dashes.component.html',
  styleUrls: ['./button-moving-dashes.component.css']
})
export class ButtonMovingDashesComponent implements OnInit {
  @Input() imageUrl: string = "";

  constructor(private sanitizer: DomSanitizer) { }

  @HostBinding("attr.style")
  public get valueAsStyle(): any {
    return this.sanitizer.bypassSecurityTrustStyle(`--image-url: ${'url('+ this.imageUrl +')'}`);
  }


  ngOnInit() {
  }


}
