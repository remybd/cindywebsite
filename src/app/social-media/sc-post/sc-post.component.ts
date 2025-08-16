import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Dialog, DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {ScPostDialogComponent} from "../sc-post-dialog/sc-post-dialog.component";
import {Router} from "@angular/router";
import {SocialMediaDataMock} from "../../datas/social-media.mock";
import {HomeDataMock} from "../../datas/home-data.mock";
import {CategoryType} from "../../datas/category";

@Component({
  selector: 'app-sc-post',
  templateUrl: './sc-post.component.html',
  styleUrl: './sc-post.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScPostComponent implements OnInit{
  dialog = inject(Dialog);
  router = inject(Router);

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef: DialogRef = this.dialog.open<string>(ScPostDialogComponent);
    dialogRef.closed.subscribe(result => {
      this.router.navigateByUrl(HomeDataMock.categoryPagePath + CategoryType.socialMedia);
    });
  }
}

