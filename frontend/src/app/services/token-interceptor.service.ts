import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  //se hereda el httpInterceptor para poder usar lo que contiene el dentro de esta clase

  constructor(private _userService: UserService) {}
  intercept(req: any, next: any) {
    const tokenReq = req.clone({        //se clona el req de verdad y se hace una copia para editar
      setHeaders: {
        Authorization: 'Bearer ' + this._userService.getToken(),
      },
    });
    return next.handle(tokenReq); //
  }
=======

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
}
