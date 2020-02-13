import { SidebarService } from 'src/app/core/services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/services/header.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vrl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user: any;

  constructor(
    private authSRV: AuthService,
    public headerSRV: HeaderService,
    public sidebarSRV: SidebarService,
    private route: Router
  ) { }

  ngOnInit() {

    this.user = this.authSRV.getUsuario();

  }

  handleSelection(event): void {

    if (event[0] === 'close_session') {
      this.authSRV.logout();
      this.route.navigate(['/login']);
    }

  }

}
