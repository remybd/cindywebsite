import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PasswordStorageService {

  // the objective here is not to bring any real security but to block 99 % of the users.
  // We know the data are not protected at all.
  // If you arrive here, you could do much easier just searching the images in the site files or disabling some html
  psdTarget = 'showme';
  private _validPasswordKeySubject = new BehaviorSubject<boolean>(false);
  validPassword$ = this._validPasswordKeySubject.asObservable();

  constructor() { }

  checkPassword(newPassword: string): boolean {
    const validPassword = newPassword == this.psdTarget;

    this._validPasswordKeySubject.next(validPassword)
    return validPassword
  }
}
