import { Component, OnInit } from '@angular/core';
import {PasswordStorageService} from "../../structure/services/password-storage.service";

@Component({
    selector: 'app-unlock-form',
    templateUrl: './unlock-form.component.html',
    styleUrls: ['./unlock-form.component.css'],
    standalone: false
})
export class UnlockFormComponent implements OnInit {
  password: string = "";
  wrongPassword: boolean = false;

  constructor(private passwordStorage: PasswordStorageService) { }

  ngOnInit(): void {
  }

  submitPassword() {
    this.wrongPassword = false;
    this.wrongPassword = !this.passwordStorage.checkPassword(this.password)
  }
}
