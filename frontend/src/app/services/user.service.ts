import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private env: string;
<<<<<<< HEAD

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
=======
  constructor(private _http: HttpClient) {
    this.env = environment.APP_URL;
  }

  registerUser(user: any) {
    return this._http.post<any>(this.env + 'user/register', user); //metodo que se va a enviar, ruta y json
  }
  login(user: any) {
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
    return this._http.post<any>(this.env + 'user/login', user);
  }

  loggedIn() {
<<<<<<< HEAD
    return !!localStorage.getItem('token'); //sirve para recibir un true o false, reemplaza la funcion alternario y la funcion if-if else
  }
  getToken() {
    return localStorage.getItem('token'); //para capturar un token, cuando se hace un registro de usuario
  }

  logout(){
    localStorage.removeItem('token'); //elimina el token y ya.
=======
    // return !!localStorage.getItem('token') un ternario para cuando vamos a devolver literal true o false, va y busca  si esta vacio devulve un false o  si tiene algo true
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
  }
}
