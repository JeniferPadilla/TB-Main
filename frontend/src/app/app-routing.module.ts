<<<<<<< HEAD
import { Component, NgModule } from '@angular/core';
=======
import { NgModule } from '@angular/core';
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegisterRoleComponent } from './admin/register-role/register-role.component';
import { RegisterUserComponent } from './admin/register-user/register-user.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListTaskComponent } from './board/list-task/list-task.component';
import { SaveTaskComponent } from './board/save-task/save-task.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
<<<<<<< HEAD

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '', //esto indica que cuando una persona busque la pagina, indica una ruta
    component: LoginComponent, // muestra el componente principal que va a mostrar
  },
  {
    path: 'login', //esto indica que cuando una persona busque la pagina, indica una ruta
    component: LoginComponent, // muestra el componente principal que va a mostrar
  },
  {
    path: 'listTask',
    component: ListTaskComponent,
    canActivate:[AuthGuard]  //aqui le estamos diciendo que tendra acceso a esta pagina si esta logeado
  },
  {
    path: 'saveTask',
    component: SaveTaskComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'signUp',
    component: RegisterComponent,
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'listUser',
    component: ListUserComponent,
    canActivate:[AuthGuard]
=======
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'listTask',
    component: ListTaskComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'saveTask',
    component: SaveTaskComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'signUp',
    component: RegisterComponent  

  },
  {
    path:'registerUser',
    component: RegisterUserComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'listUser',
    component: ListUserComponent,
    canActivate:[AuthGuard]

>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
  },
  {
    path: 'updateUser',
    component: UpdateUserComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'registerRole',
    component: RegisterRoleComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'listRole',
    component: ListRoleComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'updateRole',
    component: UpdateRoleComponent,
    canActivate:[AuthGuard]
  },
<<<<<<< HEAD
]; //aqui van todas las rutas que se van a utilizar, toda la navegacion de componentes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
=======


]; //Routes es el tipo de dato : para decirle el tipo de dato

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> 462c8b35d0ab0411b08bec7acaa9677ae0f2acb0
