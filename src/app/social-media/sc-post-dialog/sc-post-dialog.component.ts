import {Component, inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from "@angular/cdk/dialog";
import {Router} from "@angular/router";
import {SocialMediaDataMock} from "../../datas/social-media.mock";

@Component({
  selector: 'app-sc-post-dialog',
  templateUrl: './sc-post-dialog.component.html',
  styleUrl: './sc-post-dialog.component.css',
  standalone: false
})
export class ScPostDialogComponent {
  dialogRef = inject<DialogRef<string>>(DialogRef<string>);
  data = inject(DIALOG_DATA);
}
