import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';
import { MessageService } from 'primeng/api';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(
    private authSRV: AuthService,
    private messageService: MessageService
  ) {

    this.usuario = new Usuario();

  }

  ngOnInit() {

    if (this.authSRV.isAuthenticated()) {
      // this.router.navigate(['/home']);
    }

  }

  login(): void {

    if (this.usuario.username == null || this.usuario.password == null) {
      // swal.fire('Error Login', 'Usuario o contraseña vacías!', 'error');
      this.messageService.add(
        {key: 'msgLogin', severity: 'warn', summary: 'Atención!', detail: 'El usuario y la contraseña son obligatorios'}
      );
      return;
    }

    this.authSRV.login(this.usuario).subscribe( response => {

      this.messageService.add(
        {key: 'msgLogin', severity: 'success', summary: 'Acceso!', detail: 'Acceso permitido'}
      );

      this.authSRV.guardarUsuario(response.access_token);
      this.authSRV.guardarToken(response.access_token);

    }, err => {

      if (err.error.error === 'unauthorized' || err.error.error === 'invalid_grant') {
        this.messageService.add(
          {key: 'msgLogin', severity: 'error', summary: 'Error!', detail: 'Las credenciales no son correctas'}
        );
      }

    });
  }

}
