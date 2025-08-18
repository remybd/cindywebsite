import {Component, Input} from '@angular/core';
import {ContentVideoCommentModel} from "../../models/content-video-comment.model";

@Component({
  selector: 'app-block-video-comment',
  templateUrl: './block-video-comment.component.html',
  styleUrls: ['../block-image-comment/block-image-comment.component.css', './block-video-comment.component.css'],
  standalone: false
})
export class BlockVideoCommentComponent {
  @Input() post: ContentVideoCommentModel;
}
