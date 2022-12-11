import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-task',
  templateUrl: './view-employee-task.component.html',
  styleUrls: ['./view-employee-task.component.css']
})
export class ViewEmployeeTaskComponent {
  employeeId:any = ""
  fetchedTasks:any = []
  constructor(private api:ApiService){
    this.employeeId=localStorage.getItem("empId")
    let data:any = {
      "employeeId":this.employeeId
    }
    console.log(data);
    
    this.api.viewEmployeeTask(data).subscribe(
      (response:any) => {
        console.log(response);
        this.fetchedTasks = response
      }
    )
  }
}