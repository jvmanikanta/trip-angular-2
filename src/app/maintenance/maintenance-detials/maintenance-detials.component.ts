import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maintenence } from 'src/app/model/maintenence';
import { Task } from 'src/app/model/task';
import { MaintenanceService } from 'src/app/services/maintenance.service';
import { domainToASCII } from 'url';

@Component({
  selector: 'app-maintenance-detials',
  templateUrl: './maintenance-detials.component.html',
  styleUrls: ['./maintenance-detials.component.css']
})
export class MaintenanceDetialsComponent implements OnInit {

  maintenence:Maintenence
  maintenenceId:number
  taskList: Task[]
  showTask: string = "hide"
  constructor(private maintenenceService:MaintenanceService, private activatedRoute:ActivatedRoute, private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.maintenenceId = parseInt(map.get("id"));
    });
    this.maintenenceService.getById(this.maintenenceId).subscribe(
      (nmaintenence) => {
       this.maintenence = nmaintenence;
      },
      (error) => console.log(error),
      () => console.log("completed")
    )

    this.maintenenceService.getTaskByMaintenenceId(this.maintenenceId).subscribe(
      (taskList) => {
        this.taskList = taskList;
      },
      (error) => console.log(error),
      () => console.log("completed")
    )
    
  }

  showTasks = () => {
    this.showTask = "show";
  }


}
