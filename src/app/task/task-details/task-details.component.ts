import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  task:Task
  taskId:number
  workersList: Worker[]
  showWorkers: boolean = false;

  constructor(private taskService:TaskService,private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.taskId = parseInt(map.get("id"));
    });
    this.taskService.getById(this.taskId).subscribe(
      (ntask) => {
       this.task = ntask;
      },
      (error) => console.log(error),
      () => console.log("completed")
    )

    // this.taskService.getTaskByMaintenenceId(this.taskId).subscribe(
    //   (taskList) => {
    //     this.taskList = taskList;
    //     this.eventSettings = {dataSource: this.taskList,
    //       fields: {
    //         subject: {name: 'taskName'},
    //         startTime: {name: 'taskStartDate'},
    //         endTime: {name: 'taskEndDate'}
    //       }}
    //     }
    //   (error) => console.log(error),
    //   () => console.log("completed")
    // )
    
  }

}
