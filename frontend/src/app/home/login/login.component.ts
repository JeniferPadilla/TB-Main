import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
=======
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

<<<<<<< HEAD

=======
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD

=======
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
  loginData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2000;

  constructor(
<<<<<<< HEAD
    //el constructor se encarga de ejecutar lo que esta adentro antes de que el compo aparezca,ejecuta antes de que salga ej el formulario.
    private _userService: UserService, // se recomienda que las variables sean private y con _ asi guion bajo
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.loginData = {}; //es un objeto tipo json vacio,luego al ingrsar los datos se llena
  }
  
=======
    private _userService: UserService,
    private _router: Router,
    private _snackBark: MatSnackBar
  ) { 
    this.loginData = {};
  }

>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
  login() {
    if (
      !this.loginData.email ||
      !this.loginData.password
    ) {
      this.message = 'Incomplete data';
<<<<<<< HEAD
      this.openSnackBarError();
    } else {
      this._userService.login(this.loginData)
      .subscribe({
        next: (v) => {
          localStorage.setItem('token', v.token);
          this._router.navigate(['/listTask']);
        },
        error: (e) => {
          this.message= e.error.message
          this.openSnackBarError();
        },
=======
      this.openSnackBarkError();
    } else {
      this._userService.login(this.loginData).subscribe({
        next: (v)=>{
          localStorage.setItem('token', v.token);
          this._router.navigate(['/listTask']);
        },
        error: (e) =>{
          this.message = e.error.message;
          this.openSnackBarkError();
        }
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
      });
    }
  }

<<<<<<< HEAD
  openSnackBarError() {
   this._snackBar.open(this.message, 'X', {
     horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass:['styleSnackBarError'],
    });
  }


=======
  openSnackBarkError() {
    this._snackBark.open(this.message, ' X ', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarkError']
    })
  }
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
  ngOnInit(): void {
  }

}
