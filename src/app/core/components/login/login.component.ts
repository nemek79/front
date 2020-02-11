import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario';
import { MessageService } from 'primeng/api';
import swal from 'sweetalert2';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  // configuración del botón de entrar
  // public iconBtn = 'pi pi-cloud';
  public label = 'Entrar';
  public loadValue: boolean = false;

  public disablelogin = true;

  constructor(
    private authSRV: AuthService,
    public headerSRV: HeaderService,
    private messageService: MessageService
  ) {

    this.usuario = new Usuario();

  }

  ngOnInit() {

    this.headerSRV.hide();

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

    this.loadValue = true;

    this.authSRV.login(this.usuario).subscribe( response => {

      this.messageService.add(
        {key: 'msgLogin', severity: 'success', summary: 'Acceso!', detail: 'Acceso permitido'}
      );

      this.authSRV.guardarUsuario(response.access_token);
      this.authSRV.guardarToken(response.access_token);

      this.loadValue = false;

    }, err => {

      if (err.error.error === 'unauthorized' || err.error.error === 'invalid_grant') {
        this.messageService.add(
          {key: 'msgLogin', severity: 'error', summary: 'Error!', detail: 'Las credenciales no son correctas'}
        );
        this.loadValue = false;
      } else {
        this.messageService.add(
          {key: 'msgLogin', severity: 'error',
          summary: 'Error!', detail: 'Error desconocido. Por favor, póngase en contacto con el administrador de la aplicación'}
        );
        this.loadValue = false;
      }

    });
  }

}
