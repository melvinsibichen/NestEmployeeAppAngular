import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployees = (sendData:any) => {
    return this.http.post("http://localhost:8080/addEmp",sendData)
  }

  addTask = (sendData:any) => {
    return this.http.post("http://localhost:8080/addTask",sendData)
  }

  EmployeeLogin = (sendData:any) => {
    return this.http.post("http://localhost:8080/empLogin",sendData)
  }

  viewProfile = (sendData:any) => {
    return this.http.post("http://localhost:8080/viewProfile",sendData)
  }

  viewEmployeeTask = (sendData:any) => {
    return this.http.post("http://localhost:8080/viewEmpTask",sendData)
  }

  updateStatus = (sendData:any) => {
    return this.http.post("http://localhost:8080/updateStatus",sendData)
  }

  viewAllTasks = () => {
    return this.http.get("http://localhost:8080/viewAllTask")
  }
}
