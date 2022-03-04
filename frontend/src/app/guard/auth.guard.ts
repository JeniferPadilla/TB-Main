import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {CanActivate,Router} from '@angular/router'; //esta importacion hace referencia al app.routing.module
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  //para proteger las rutas que queremos
  constructor(private _userService: UserService, private _router:Router){} // cuanto se importa el router es por ue se hara una redireccion de pagina

  canActivate(): boolean {
   if (!this._userService.loggedIn()) { //se verifica si la funcionn tiene algo
     this._router.navigate(['login']); // si no tiene token lo lleva al login
    return false                       // y retorna un false
   } else {
     return true                       // si hay un true le dara acceso a la pagina
   }
=======
import { CanActivate, Router } from '@angular/router';//router para cuando vamos a hacer una redireccion

import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 //con CanActive para habilitar o no ciertas rutas

 constructor(private _userService: UserService, private _router: Router){}

  canActivate(): boolean{
    if (!this._userService.loggedIn()) {
      this._router.navigate(['/login']);
      return false;
    } else {
      return true
    }
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
  }
}
