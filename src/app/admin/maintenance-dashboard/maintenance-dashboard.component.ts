import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Maintenence } from 'src/app/model/maintenence';
import { Priority } from 'src/app/model/priority.enum';
import { Status } from 'src/app/model/status.enum';
import { MaintenanceService } from 'src/app/services/maintenance.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-maintenance-dashboard',
  templateUrl: './maintenance-dashboard.component.html',
  styleUrls: ['./maintenance-dashboard.component.css']
})

/**
 * @author JVmanikanta
 */
export class MaintenanceDashboardComponent implements OnInit {

  maintenence: Maintenence = {
    maintenenceName: "",
    maintenencePriority: Priority.HIGH,
    maintenenceId: 0,
    maintenanceImg: "",
    maintenenceStatus: Status.COMPLETED,
    maintenenceStartDate: new Date(),
    maintenenceEndDate: new Date(),
    maintenenceOwner: "",
    taskList: undefined,
    trip: undefined
  }

  umaintenence: Maintenence = {
    maintenenceName: "",
    maintenencePriority: Priority.HIGH,
    maintenenceId: 0,
    maintenanceImg: "",
    maintenenceStatus: Status.COMPLETED,
    maintenenceStartDate: new Date(),
    maintenenceEndDate: new Date(),
    maintenenceOwner: "",
    taskList: undefined,
    trip: undefined
  }
  rmaintenence: Maintenence
 
  priority:Priority
  merrorMsg: string
  terrorMsg: string

  taskId: number
  maintenanceId: number

  isAddClicked: boolean = false;
  isAssignClicked: boolean = false;
  isUpdateClicked: boolean = false;


  constructor(private _maintenenceService: MaintenanceService,private _taskService: TaskService) { }

  ngOnInit(): void {
    
  }
  onAdd = (addMaintenenceForm:NgForm) => {
    console.log(addMaintenenceForm.value);
    this._maintenenceService.addMaintenence(this.maintenence).subscribe(
      (maintenence) => {
        this.rmaintenence = maintenence
        alert("Maintenence Added Successfully");
      },
      (error) => console.log(error),
      () => console.log("completed")
    )
  } 

  onMaintenanceIdChange = () => {
    let id = <HTMLInputElement> document.getElementById("maintenanceId");
    this.maintenanceId = parseInt(id.value);
    this._maintenenceService.getById(this.maintenanceId).subscribe(
      (smaintenance) => {
        this.merrorMsg = "";
      },
      (error) => {
        this.merrorMsg="*Enter valid maintenance Id";
      },
      () => console.log('completed')
    )
  }

  onTaskIdChange = () => {
    let id = <HTMLInputElement> document.getElementById("taskId");
    this.taskId = parseInt(id.value);
    this._taskService.getById(this.taskId).subscribe(
      (stask) => {
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
      this._maintenenceService.assignTask(this.maintenanceId, this.taskId).subscribe(
        (response) => {
          console.log('assigned')
         
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

  onUpdate = (updateMaintenenceForm: NgForm) => {
    console.log(updateMaintenenceForm.value);
    this._maintenenceService.updateMaintenance(this.umaintenence).subscribe(
      (response) => {
        console.log(response);
        alert("Updated");
        this.umaintenence = this.maintenence;
      },
      (error) => console.log(error),
      ()=>console.log("completed")
    )
  }

  onEnterId = () => {
    let id = <HTMLInputElement> document.getElementById("maintenenceId");
    let maintenenceId = parseInt(id.value);
    this._maintenenceService.getById(maintenenceId).subscribe(
      (response)=>this.umaintenence = response
    )
  }
}
