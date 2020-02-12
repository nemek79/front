import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: any;

  constructor(
    private authSRV: AuthService,
    public headerSRV: HeaderService
  ) { }

  ngOnInit() {

    this.user = this.authSRV.getUsuario();

  }

  handleSelection(event): void {
    console.log('======> header.handleselection')
    this.authSRV.logout();
  }

}
