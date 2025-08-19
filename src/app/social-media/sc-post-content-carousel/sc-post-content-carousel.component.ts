import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ContentImageCommentModel} from "../../content/models/content-image-comment.model";
import {ContentVideoCommentModel} from "../../content/models/content-video-comment.model";

@Component({
  selector: 'app-sc-post-content-carousel',
  templateUrl: './sc-post-content-carousel.component.html',
  styleUrl: './sc-post-content-carousel.component.css',
  standalone: false
})
export class ScPostContentCarouselComponent implements OnChanges{
  @Input() posts: ContentImageCommentModel[] | ContentVideoCommentModel[] = [];
  imageBlockType = ContentImageCommentModel.blockName;
  videoBlockType = ContentVideoCommentModel.blockName;
  showCarousel: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    // not optimal but the library is not reloading on value change
    if (changes?.posts && changes?.posts?.currentValue) {
      this.showCarousel = false; // Hide carousel to destroy it
      setTimeout(() => {
        this.showCarousel = true; // Show carousel to recreate it
      }, 0);
    }
  }

}
