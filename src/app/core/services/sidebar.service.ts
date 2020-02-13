import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ModelState } from '../models/modelshow';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private loaderSubject = new Subject<ModelState>();
  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next({ show: true } as ModelState);
  }

  hide() {
    this.loaderSubject.next({ show: false } as ModelState);
  }
}
