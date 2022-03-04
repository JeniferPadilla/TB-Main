import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { TaskService } from '../../services/task.service';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
=======
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0

@Component({
  selector: 'app-save-task',
  templateUrl: './save-task.component.html',
<<<<<<< HEAD
  styleUrls: ['./save-task.component.css'],
})
export class SaveTaskComponent implements OnInit {
  registerTaskData: any;
  message: string = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds: number = 2000;

  constructor(
    private _taskService: TaskService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerTaskData = {};
  }
  registerTask() {
    if (
      !this.registerTaskData.name ||
      !this.registerTaskData.description ||
      !this.registerTaskData.ImageUrl ||
      !this.registerTaskData.taskStatus
    ) {
      this.message = 'Incomplete data';
      this.openSnackBarError();
    } else {
      this._taskService.registerTask(this.registerTaskData).subscribe({
        next: (v) => {
          localStorage.setItem('token', v.token);
          this._router.navigate(['/listTask']);
          this.message = 'Sucesful task registration';
          this.openSnackBarSuccesfull();
        },
        error: (e) => {
          this.message = e.error.message;
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
      panelClass: ['styleSnackBarSuccesful'],
    });
  }

  openSnackBarError() {
    this._snackBar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds,
      panelClass: ['styleSnackBarError'],
    });
  }

  ngOnInit(): void {}
=======
  styleUrls: ['./save-task.component.css']
})
export class SaveTaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
}
