import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddTasksComponent } from './add-tasks/add-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewEmployeeTaskComponent } from './view-employee-task/view-employee-task.component';
import { UpdateTaskStatusComponent } from './update-task-status/update-task-status.component';

let myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"addEmp",
    component:AddEmployeeComponent
  },
  {
    path:"addTask",
    component:AddTasksComponent
  },
  {
    path:"viewAllTasks",
    component:ViewTasksComponent
  },
  {
    path:"empLogin",
    component:EmployeeLoginComponent
  },
  {
    path:"viewProfile",
    component:ViewProfileComponent
  },
  {
    path:"viewMyTasks",
    component:ViewEmployeeTaskComponent
  },
  {
    path:"updateTaskStatus",
    component:UpdateTaskStatusComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    AdminLoginComponent,
    AdminNavbarComponent,
    AddEmployeeComponent,
    AddTasksComponent,
    ViewTasksComponent,
    EmployeeLoginComponent,
    EmployeeNavbarComponent,
    ViewProfileComponent,
    ViewEmployeeTaskComponent,
    UpdateTaskStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }