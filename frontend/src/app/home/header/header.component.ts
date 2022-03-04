import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
import { Router } from "@angular/router";
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
<<<<<<< HEAD
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _userService:UserService, 
    private _router:Router) { }

  ngOnInit(): void {} //aqui se pone lo que queremos que se inicialice con el constructor

  logout(){
    this._userService.logout();
=======
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //userService va public porque otro archivo puede acceder a esa variable, el constructor es lo primero que se carga antes de que cargue la pagina 
  constructor(public _userService: UserService, private _router: Router) {}

  
  ngOnInit(): void {}//a penas cargue la pagina muuestra aca 

  logout(){
    this._userService.logout()
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
    this._router.navigate(['/login']);
  }
}
