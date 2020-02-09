import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private authSRV: AuthService
  ) {

    this.usuario = new Usuario();
    this.usuario.username = 'david';
    this.usuario.password = '12345';
    this.login();
  }

  ngOnInit() {
  }


  login(): void {

    this.authSRV.login(this.usuario).subscribe( response => {
      console.log(response);
    });

  }

}
