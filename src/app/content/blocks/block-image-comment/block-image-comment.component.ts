import {Component, Input} from '@angular/core';
import {ContentImageCommentModel} from "../../models/content-image-comment.model";

@Component({
  selector: 'app-block-image-comment',
  templateUrl: './block-image-comment.component.html',
  styleUrl: './block-image-comment.component.css',
  standalone: false
})
export class BlockImageCommentComponent {
  @Input() post: ContentImageCommentModel;
}
