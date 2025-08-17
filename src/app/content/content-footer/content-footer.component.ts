import {Component, Input} from '@angular/core';
import {ContentSocialMediaModel} from "../models/content-social-media.model";
import {ContentPageModel} from "../models/content-page.model";

@Component({
  selector: 'app-content-footer',
  templateUrl: './content-footer.component.html',
  styleUrl: './content-footer.component.css',
  standalone: false
})
export class ContentFooterComponent {
  @Input() content: ContentPageModel | ContentSocialMediaModel;
  @Input() backRoute = '/';
}
