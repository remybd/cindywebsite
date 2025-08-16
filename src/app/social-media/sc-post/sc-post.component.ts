import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Dialog, DialogRef} from "@angular/cdk/dialog";
import {ScPostDialogComponent} from "../sc-post-dialog/sc-post-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";
import {SocialMediaDataMock} from "../../datas/social-media.mock";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-sc-post',
  templateUrl: './sc-post.component.html',
  styleUrl: './sc-post.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPostComponent implements OnInit {
  dialog = inject(Dialog);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getContentFromUrl();

  }

  getContentFromUrl(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const key = params.get('key');
      if (!key || !(key in SocialMediaDataMock.socialMediaDic)) {
        return;
      }
      this.openDialog(key);
    });
  }

  openDialog(key: string): void {
    const dialogRef: DialogRef = this.dialog.open<string>(ScPostDialogComponent, {
      data: {key: key.toString()},
    });

    dialogRef.closed.subscribe(result => {
      this.router.navigateByUrl('/social-media');
    });
  }
}

