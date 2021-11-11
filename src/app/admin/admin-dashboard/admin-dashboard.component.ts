import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  isTaskClicked: boolean = false;
  isTripClicked: boolean = false;
  isMaintenenceClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickTrip = () =>{
    if(!this.isTaskClicked){
      this.isTripClicked = true;
      this.isMaintenenceClicked = false;
      this.isTaskClicked = false;
    }else{
      this.isTaskClicked = false;
    }
  }
  onClickMaintenence = () => {
    if(!this.isMaintenenceClicked){
      this.isMaintenenceClicked = true;
      this.isTaskClicked = false;
      this.isTripClicked = false;
    }else{
      this.isMaintenenceClicked = false;
    }
  }
  onClickTasks = () => {
    if(!this.isTaskClicked){
      this.isTaskClicked = true;
      this.isMaintenenceClicked = false;
      this.isTripClicked = false;
    }else{
      this.isTaskClicked = false;
    }
  }
}
