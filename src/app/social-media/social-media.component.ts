import {Component} from '@angular/core';
import {SocialMediaDataMock} from "../datas/social-media.mock";


@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
  standalone: false
})
export class SocialMediaComponent {
  socialMedias = Object.values(SocialMediaDataMock.socialMediaDic);
}
