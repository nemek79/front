import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, ActivatedRouteSnapshot, 
  RouterStateSnapshot, UrlTree, Route, UrlSegment } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {


  constructor(
    private authSRV: AuthService,
    private route: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authSRV.isAuthenticated()) {

      if (this.isTokenExpirado()) {
        this.authSRV.logout();
        this.route.navigate(['/login']);
      }

      return true;
    }

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
