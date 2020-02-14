import { Component } from '@angular/core';
import { HeaderService } from './core/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public menuItems = [
    {id: 'it_1', type: 'static', label: 'FRAMEWORK', icon: 'pi pi-user'},
    {id: 'it_1', type: 'link', label: 'CLIENTES', icon: 'pi pi-cloud', link: '/clientes'}
  ];

  public label = 'prueba';

  constructor(
    public headerSRV: HeaderService
  ) {

  }
}
