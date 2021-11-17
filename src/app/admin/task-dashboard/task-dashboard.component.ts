import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Priority } from 'src/app/model/priority.enum';
import { Status } from 'src/app/model/status.enum';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { TechniciansService } from 'src/app/services/technicians.service';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.css']
})
export class TaskDashboardComponent implements OnInit {
  task: Task = {
    taskId: 0,
    taskName: '',
    taskOwner: '',
    taskStartDate: undefined,
    taskEndDate: undefined,
    taskPriority: Priority.HIGH,
    taskDuration: '',
    taskStatus: Status.COMPLETED,
    techniciansList: undefined,
    maintenence: undefined,
    trip: undefined
  }

  utask: Task = {
    taskId: 0,
    taskName: '',
    taskOwner: '',
    taskStartDate: undefined,
    taskEndDate: undefined,
    taskPriority: Priority.HIGH,
    taskDuration: '',
    taskStatus: Status.COMPLETED,
    techniciansList: undefined,
    maintenence: undefined,
    trip: undefined
  }
  rtask: Task
 
  priority:Priority
  merrorMsg: string
  terrorMsg: string

  taskId: number
  workerId: number

  isAddClicked: boolean = false;
  isAssignClicked: boolean = false;
  isUpdateClicked: boolean = false;


  constructor(private _taskService: TaskService, private workerService: TechniciansService) { }

  ngOnInit(): void {
    
  }
  onAdd = (addTaskForm:NgForm) => {
    console.log(addTaskForm.value);
    this._taskService.addTask(this.task).subscribe(
      (task) => {
        this.rtask = task
        alert("Task Added Successfully");
      },
      (error) => console.log(error),
      () => console.log("completed")
    )
  } 

  onTaskIdChange = () => {
    let id = <HTMLInputElement> document.getElementById("taskId");
    this.taskId = parseInt(id.value);
    this._taskService.getById(this.taskId).subscribe(
      (stask) => {
        this.merrorMsg = "";
      },
      (error) => {
        this.merrorMsg="*Enter valid maintenance Id";
      },
      () => console.log('completed')
    )
  }

  onWorkerIdChange = () => {
    let id = <HTMLInputElement> document.getElementById("workerId");
    this.workerId = parseInt(id.value);
    this.workerService.gettechniciansById(this.workerId).subscribe(
      (sworker) => {
        this.terrorMsg = "";
      },
      (error) => {
        this.terrorMsg = "*Enter valid Task Id";
      },
      () => console.log("completed")
    )
  }

  onClickSubmit = () => {
    if((this.merrorMsg == "" && this.terrorMsg == "")){
      console.log('submitted');
      this._taskService.assignWorkers(this.taskId, this.workerId).subscribe(
        (response) => {
          console.log('assigned')
          alert("Assigned");
        },
        (error) => {
          console.log("assigned")
          alert("Assigned");
        },
        () => console.log('completed')
      )
    }else{
      alert("Enter valid values");
    }
    
  }
  addForm = () => {
    if(!this.isAddClicked){
      this.isAddClicked = true;
      this.isAssignClicked = false;
      this.isUpdateClicked = false;
    }else{
      this.isAddClicked = false;
    }
  }

  assignForm = () => {
    if(!this.isAssignClicked){
      this.isAssignClicked = true;
      this.isAddClicked = false;
      this.isUpdateClicked = false;
    }else{
      this.isAssignClicked = false;
    }

  }
  updateForm = () =>{
    if(!this.isUpdateClicked){
      this.isUpdateClicked = true;
      this.isAddClicked = false;
      this.isAssignClicked = false;
    }else{
      this.isUpdateClicked = false;
    }

  }

  onUpdate = (updateTaskForm: NgForm) => {
    console.log(updateTaskForm.value);
    this._taskService.updateTask(this.utask).subscribe(
      (response) => {
        console.log(response);
        alert("Updated");
        this.utask = this.task;
      },
      (error) => console.log(error),
      ()=>console.log("completed")
    )
  }

  onEnterId = () => {
    let id = <HTMLInputElement> document.getElementById("taskId");
    let taskId = parseInt(id.value);
    this._taskService.getById(taskId).subscribe(
      (response)=>this.utask = response
    )
  }

}
