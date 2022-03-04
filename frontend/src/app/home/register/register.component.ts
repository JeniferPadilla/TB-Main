import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
<<<<<<< HEAD
import { Router } from "@angular/router";
=======
import { Router } from '@angular/router';
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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
<<<<<<< HEAD
  //aqui dentro se crean las variables
=======
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
  registerData: any;
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
    this.registerData = {}; //es un objeto tipo json vacio,luego al ingrsar los datos se llena
  }

  // metodos
=======
    private _userService: UserService,
    private _router: Router,
    private _snackBark: MatSnackBar
  ) {
    this.registerData = {}; //un objeto vacio
  }

  //metodos, funciones
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
  registerUser() {
    if (
      !this.registerData.name ||
      !this.registerData.email ||
      !this.registerData.password
    ) {
      this.message = 'Incomplete data';
<<<<<<< HEAD
      this.openSnackBarError();
    } else {
      this._userService.registerUser(this.registerData).
      subscribe({
        next: (v) => {
          localStorage.setItem('token', v.token);
          this._router.navigate(['/saveTask']);
          this.message= 'Sucesful user registration'
          this.openSnackBarSuccesfull();
        },
        error: (e) => {
          this.message= e.error.message
          this.openSnackBarError();
        },
      });
    }
  }

  openSnackBarSuccesfull() {
    this._snackBar.open(this.message, 'X', {
    horizontalPosition: this.horizontalPosition,
     verticalPosition: this.verticalPosition,
     duration: this.durationInSeconds,
     panelClass:['styleSnackBarSuccesful'],
   });
  }

  openSnackBarError() {
   this._snackBar.open(this.message, 'X', {
     horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass:['styleSnackBarError'],
    });
  }

  ngOnInit(): void {
    // que apenas aparezca el formulario se ejecuta
  }
=======
      this.openSnackBarkError();
    } else {
      this._userService.registerUser(this.registerData).subscribe({
        next: (v)=>{
          localStorage.setItem('token', v.token);
          this._router.navigate(['/saveTask']);
          this.message = 'Succesfull user registration';
          this.openSnackBarSuccesfull();
        },
        error: (e) =>{
          this.message = e.error.message;
          this.openSnackBarkError();
        }
      });
    }
  }
  openSnackBarSuccesfull() {
    this._snackBark.open(this.message, ' X ', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarkSuccesfull']
    })
  }
  openSnackBarkError() {
    this._snackBark.open(this.message, ' X ', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarkError']
    })
  }

  ngOnInit(): void {}
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
}
