import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
=======
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0

@Injectable({
  providedIn: 'root'
})
export class TaskService {
<<<<<<< HEAD
  private env: string;
  constructor(private _http: HttpClient) {
   this.env = environment.APP_URL;
   }

   registerTask(task: any) {
    //http://localhost:3001/api
    return this._http.post<any>
    (this.env + 'task/saveTask', task);
  }
=======

  constructor() { }
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
}
