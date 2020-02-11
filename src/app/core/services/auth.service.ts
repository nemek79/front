import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _usuario: Usuario;
    private _token: string;

    constructor(
        private http: HttpClient
    ) { }

    login(usuario: Usuario): Observable<any> {

        const urlEndpoint = environment.urlEndPointAuth + '/oauth/token';
        const credenciales = btoa(environment.client + ':' + environment.clientPass);

        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + credenciales
          });

        const params = new URLSearchParams();

        params.set('grant_type', 'password');
        params.set('username', usuario.username);
        params.set('password', usuario.password);

        return this.http.post<any>(urlEndpoint, params.toString(), {headers: httpHeaders});
    }

    guardarUsuario(accessToken: string): void {

        const payload = this.obtenerDatosToken(accessToken);

        this._usuario = new Usuario();

        this._usuario.roles = payload.authorities;
        this._usuario.username = payload.user_name;

        // Guardar el usuario en el session storage
        sessionStorage.setItem('usuario', JSON.stringify(this._usuario));

    }

    guardarToken(accessToken: string): void {

        this._token = accessToken;
        sessionStorage.setItem('token', accessToken);

    }

    obtenerDatosToken(accessToken: string): any {

        if (accessToken != null) {
          return JSON.parse(atob(accessToken.split('.')[1]));
        }

        return null;
    }

    isAuthenticated(): boolean {

        const payload = this.obtenerDatosToken(this.getToken());

        if (payload != null && payload.user_name && payload.user_name.length > 0) {
            return true;
        }

        return false;
    }

    public getUsuario(): Usuario {

        if (this._usuario != null) {
          return this._usuario;
        } else if (this._usuario == null && sessionStorage.getItem('usuario')) {
          this._usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
          return this._usuario;
        }

        return new Usuario();
    }

    public getToken(): string {

        if (this._token != null) {
          return this._token;
        } else if (this._token == null && sessionStorage.getItem('token')) {
          this._token = sessionStorage.getItem('token');
          return this._token;
        }

        return null;

    }

    hasRole(role: string): boolean {

        if (this.getUsuario().roles.includes(role)) {
          return true;
        }

        return false;

    }

    logout(): void {

        this._token = null;
        this._usuario = null;
        sessionStorage.clear();

    }
}