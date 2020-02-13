import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { CanActivate, CanActivateChild, CanLoad, Router, ActivatedRouteSnapshot, 
          RouterStateSnapshot, UrlTree, Route, UrlSegment } from '@angular/router';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild, CanLoad {


  constructor(
    private authSRV: AuthService,
    private route: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Obtener los parametros
    const roles = next.data.role as [];

    for (const role of roles) {

      if (this.authSRV.hasRole(role)) {

        return true;

      }
    }

    swal.fire('Acceso denegado', `Hola ${this.authSRV.getUsuario().username} no tienes acceso`, 'warning');
    this.route.navigate(['/login']);

    return false;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  private  isTokenExpirado(): boolean {

    const token = this.authSRV.getToken();

    const payload = this.authSRV.obtenerDatosToken(token);

    const now = new Date().getTime() / 1000; // Fecha actual en segundos

    if (payload.exp < now)  {
      return true;
    }

    return false;
  }

}
