import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

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

        const urlEndpoint = 'http://localhost:8099/oauth/token';
        const credenciales = btoa('TESTAPP' + ':' + '12345');

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
}