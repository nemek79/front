import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModelState } from '../models/modelshow';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public isShowed = false;

  private loaderSubject = new Subject<ModelState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.isShowed = true;
    this.loaderSubject.next({ show: true } as ModelState);
  }

  hide() {
    this.isShowed = false;
    this.loaderSubject.next({ show: false } as ModelState);
  }

  toggle() {

    if (!this.isShowed) {
      this.show();
    } else {
      this.hide();
    }

  }
}
