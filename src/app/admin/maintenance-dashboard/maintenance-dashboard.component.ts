import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Maintenence } from 'src/app/model/maintenence';
import { Priority } from 'src/app/model/priority.enum';
import { Status } from 'src/app/model/status.enum';
import { MaintenanceService } from 'src/app/services/maintenance.service';

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
  rmaintenence: Maintenence
 
  priority:Priority
  constructor(private _maintenenceService: MaintenanceService) { }

  ngOnInit(): void {
    
  }
  onAdd = (addMaintenenceForm:NgForm) => {
    console.log(addMaintenenceForm.value);
    this._maintenenceService.addMaintenence(this.maintenence).subscribe(
      (maintenence) => this.rmaintenence = maintenence,
      (error) => console.log(error),
      () => console.log("completed")
    )
  } 

}
