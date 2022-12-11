import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent {
  data:any = []
  constructor(private api:ApiService) {
    this.api.viewAllTasks().subscribe(
      (response:any) => {
        console.log(response);
        this.data=response
      }
    )
  }
}