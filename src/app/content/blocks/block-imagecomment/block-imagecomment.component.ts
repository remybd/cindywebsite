import {Component, Input} from '@angular/core';
import {ContentImageCommentModel} from "../../models/content-image-comment.model";

@Component({
  selector: 'app-block-imagecomment',
  templateUrl: './block-imagecomment.component.html',
  styleUrl: './block-imagecomment.component.css',
  standalone: false
})
export class BlockImagecommentComponent {
  @Input() post: ContentImageCommentModel;
}
