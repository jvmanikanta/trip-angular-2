import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventSettingsModel, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { Maintenence } from 'src/app/model/maintenence';
import { Task } from 'src/app/model/task';
import { MaintenanceService } from 'src/app/services/maintenance.service';


@Component({
  selector: 'app-maintenance-detials',
  providers: [TimelineMonthService],
  templateUrl: './maintenance-detials.component.html',
  styleUrls: ['./maintenance-detials.component.css']
})
export class MaintenanceDetialsComponent implements OnInit {

  maintenence:Maintenence
  maintenenceId:number
  taskList: Task[]
  showTask: boolean = false;
  
  eventSettings: EventSettingsModel;
  constructor(private maintenenceService:MaintenanceService,private route:Router, private activatedRoute:ActivatedRoute, private elementRef:ElementRef) { }

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
        this.eventSettings = {dataSource: this.taskList,
          fields: {
            subject: {name: 'taskName'},
            startTime: {name: 'taskStartDate'},
            endTime: {name: 'taskEndDate'}
          }}
        },
      (error) => console.log(error),
      () => console.log("completed")
    )
    
  }

  showTasks = () => {
    if(!this.showTask){
      this.showTask = true;
    }else{
      this.showTask = false;
    }
  }

  goToTask = (task: Task) => {
    console.log("hello");
    this.route.navigate(["task-details",task.taskId]);
  }


}
