import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  providers: [TimelineMonthService],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  task:Task

  taskList: Task[] = [];
  afterFilteredList: Task[] 
  filterTaskList: Task[]

  checked:boolean = false;
  popup: boolean = false;

  prioritySet: Set<string> = new Set();
  statusSet: Set<string> = new Set();

  public eventSettings: EventSettingsModel;

  constructor(private _taskService:TaskService,private router:Router) { }
  
    ngOnInit(): void {
      this._taskService.getAllTasks().subscribe(
        (taskList)=>{
          this.taskList = taskList;
          this.eventSettings = {dataSource: this.taskList,
            fields: {
              subject: {name: 'taskName'},
              startTime: {name: 'taskStartDate'},
              endTime: {name: 'taskEndDate'}
            }}
        },
        (error)=>console.log(error),
        ()=>console.log("completed")
      )
  
    }
  
    showTaskDetails=(task:Task)=>{
      this.router.navigate(['/task-details',task.taskId])
    }

    onClick = (value:string) => {
      if(this.prioritySet.has(value) || this.statusSet.has(value)){
        this.prioritySet.delete(value);
        this.statusSet.delete(value);
      }else{
        if((value == "HIGH") || (value == "MEDIUM") || (value == "LOW" )){
          this.prioritySet.add(value);
        }else{
          this.statusSet.add(value);
        }
        
      }
  
      this.prioritySet.size != 0 || this.statusSet.size != 0? this.checked = true : this.checked = false;
  
      if(this.statusSet.size == 0){
        this.filterTaskList = this.taskList.filter((task)=> this.prioritySet.has(task.taskPriority.toString()));
      }
      else if(this.prioritySet.size == 0){
        this.filterTaskList = this.taskList.filter((task)=>this.statusSet.has(task.taskStatus.toString()));
      }else{
        this.filterTaskList = this.taskList.filter((task)=>this.prioritySet.has(task.taskPriority.toString()) && this.statusSet.has(task.taskStatus.toString()));
      }
      
      let filteredSet:Set<Task> = new Set();
      this.filterTaskList.forEach((task) => {
        filteredSet.add(task);
      })
      this.afterFilteredList = [...filteredSet.values()];
      if(this.checked){
        this.eventSettings = {dataSource: this.afterFilteredList,
        fields:{
          subject: {name: 'taskName'},
          startTime: {name: 'taskStartDate'},
          endTime: {name: 'taskEndDate'}
        }}
      }
      else{
        this.eventSettings = {dataSource: this.taskList,
          fields:{
            subject: {name: 'taskName'},
            startTime: {name: 'taskStartDate'},
            endTime: {name: 'taskEndDate'}
          }}
      }
    }
}
