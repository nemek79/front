import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(
    private authSRV: AuthService
  ) {

    this.usuario = new Usuario();

  }

  ngOnInit() {
  }

  login(): void {

    if (this.usuario.username == null || this.usuario.password == null) {
      swal.fire('Error Login', 'Usuario o contraseña vacías!', 'error');
      return;
    }

    this.authSRV.login(this.usuario).subscribe( response => {
      console.log(response);
    });

  }

}
