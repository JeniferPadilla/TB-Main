import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env: string;

  constructor(private _http: HttpClient) {
    //aqui dentro van los servicios,guard y lo que este importado en otras librerias,los que digas @angular,execto los services
    this.env = environment.APP_URL; // aqui van las variables
  }
  registerUser(user: any) {
    //http://localhost:3001/api
    return this._http.post<any>(this.env + 'user/register', user);
  }
  login(user: any) {
    //http://localhost:3001/api
    return this._http.post<any>(this.env + 'user/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token'); //sirve para recibir un true o false, reemplaza la funcion alternario y la funcion if-if else
  }
  getToken() {
    return localStorage.getItem('token'); //para capturar un token, cuando se hace un registro de usuario
  }

  logout(){
    localStorage.removeItem('token'); //elimina el token y ya.
  }
}
