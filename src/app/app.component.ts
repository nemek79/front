import { Component } from '@angular/core';
import { HeaderService } from './core/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public headerSRV: HeaderService
  ){

  }
}
