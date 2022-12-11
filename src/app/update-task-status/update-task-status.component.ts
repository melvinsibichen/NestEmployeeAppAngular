import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-task-status',
  templateUrl: './update-task-status.component.html',
  styleUrls: ['./update-task-status.component.css']
})
export class UpdateTaskStatusComponent {
  status = ""
  employeeId:any = ""
  constructor(private api:ApiService){}

  updateStatus = () => {
    this.employeeId=localStorage.getItem("empId")
    let data:any = {
      "status":this.status,
      "id":this.employeeId
    }

    this.api.updateStatus(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status == "success"){
          alert("Updated")
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}