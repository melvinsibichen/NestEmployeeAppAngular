import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private api:ApiService) {}

  employeeCode = ""
  name = ""
  designation = ""
  email = ""
  mobileNo = ""
  username = ""
  password = ""

  readValues = () => {
    let employee:any = {
      "employeeCode":this.employeeCode,
      "name":this.name,
      "designation":this.designation,
      "email":this.email,
      "mobileNo":this.mobileNo,
      "username":this.username,
      "password":this.password
    }
    console.log(employee);
    this.api.addEmployees(employee).subscribe(
      (response:any) => {
        console.log(response);
        
        if(response.status=="success"){
          alert("added successfully")
          this.employeeCode = ""
          this.name = ""
          this.designation = ""
          this.email = ""
          this.mobileNo = ""
          this.username = ""
          this.password = ""
        } else {
          alert("something is wrong")
        }
      }
    )
  }
}