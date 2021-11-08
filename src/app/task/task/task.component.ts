import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskList:Task[]
  task:Task
    constructor(private _taskService:TaskService,private router:Router) { }
  
    ngOnInit(): void {
      this._taskService.getAllTasks().subscribe(
        (taskList)=>{
          this.taskList = taskList;
          console.log(taskList)
          console.log(this.taskList);
        },
        (error)=>console.log(error),
        ()=>console.log("completed")
      )
  
    }
  
    showTaskDetails=(task:Task)=>{
      this.router.navigate(['/task-details',task.taskId])
    }
}
