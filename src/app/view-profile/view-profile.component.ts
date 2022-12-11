import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  employeeId:any = ""
  fetchedData:any = []

  constructor(private api:ApiService){
    this.employeeId = localStorage.getItem("empId")
    console.log(this.employeeId);
    let data:any = {
      "id":this.employeeId
    }
    console.log(data);
    
    this.api.viewProfile(data).subscribe(
      (response:any) => {
        console.log(response);
        this.fetchedData=response
      }
    )
  }
}