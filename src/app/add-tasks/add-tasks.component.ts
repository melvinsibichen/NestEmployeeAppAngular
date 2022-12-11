import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent {
  constructor(private api:ApiService){}
  task = ""
  employeeId = ""
  status = "Not completed"
  readValues = () => {
    let data:any = {
      "task":this.task,
      "employeeId":this.employeeId,
      "status":this.status
    }
    console.log(data);
    
    this.api.addTask(data).subscribe(
      (response:any) => {
        console.log(response);
        if(response.status == "success"){
          alert("Added successfully")
          this.task = ""
          this.employeeId = ""
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}