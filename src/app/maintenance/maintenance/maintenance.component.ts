import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TimelineMonthService,EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import {  Maintenence } from 'src/app/model/maintenence';
import { MaintenanceService } from 'src/app/services/maintenance.service';


@Component({
  selector: 'app-maintenance',
  providers: [TimelineMonthService],
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
/**
 * @author JVmanikanta
 */
export class MaintenanceComponent implements OnInit {

  maintenanceList: Maintenence[] = [];
  afterFilteredList: Maintenence[] 
  filterMaintenanceList: Maintenence[]

  checked:boolean = false;
  popup: boolean = false;

  prioritySet: Set<string> = new Set();
  statusSet: Set<string> = new Set();

  public eventSettings: EventSettingsModel;
  
  constructor(private _maintenanceService: MaintenanceService, private _router:Router) { }

  ngOnInit(): void {
    this._maintenanceService.getAllMaintenences().subscribe(
      (maintenenceList) => {
        this.maintenanceList = maintenenceList;
        this.eventSettings = {dataSource: this.maintenanceList,
        fields: {
          subject: {name: 'maintenenceName'},
          startTime: {name: 'maintenenceStartDate'},
          endTime: {name: 'maintenenceEndDate'}
        }}
      },
      (error) => console.log(error),
      () => console.log("completed")
    )
}

  showMaintenenceDetails = (maintenence:Maintenence) => {
    this._router.navigate(["maintenence-details",maintenence.maintenenceId])
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
      this.filterMaintenanceList = this.maintenanceList.filter((maintenance)=> this.prioritySet.has(maintenance.maintenencePriority.toString()));
    }
    else if(this.prioritySet.size == 0){
      this.filterMaintenanceList = this.maintenanceList.filter((maintenance)=>this.statusSet.has(maintenance.maintenenceStatus.toString()));
    }else{
      this.filterMaintenanceList = this.maintenanceList.filter((maintenance)=>this.prioritySet.has(maintenance.maintenencePriority.toString()) && this.statusSet.has(maintenance.maintenenceStatus.toString()));
    }
    
    let filteredSet:Set<Maintenence> = new Set();
    this.filterMaintenanceList.forEach((maintenance) => {
      filteredSet.add(maintenance);
    })
    this.afterFilteredList = [...filteredSet.values()];
    if(this.checked){
      this.eventSettings = {dataSource: this.afterFilteredList,
      fields:{
        subject: {name: 'maintenenceName'},
        startTime: {name: 'maintenenceStartDate'},
        endTime: {name: 'maintenenceEndDate'},
      }}
    }
    else{
      this.eventSettings = {dataSource: this.maintenanceList,
        fields:{
          subject: {name: 'maintenenceName'},
          startTime: {name: 'maintenenceStartDate'},
          endTime: {name: 'maintenenceEndDate'}
        }}
    }
  }
  
}
