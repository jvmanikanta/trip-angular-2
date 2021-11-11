import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { Trip } from 'src/app/model/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip',
  providers: [TimelineMonthService],
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

tripsList:Trip[]

afterFilteredList: Trip[] 
filterTripList: Trip[]

  checked:boolean = false;
  popup: boolean = false;

  prioritySet: Set<string> = new Set();
  statusSet: Set<string> = new Set();

  public eventSettings: EventSettingsModel;
  constructor(private tripService:TripService,private router:Router) { }

  ngOnInit(): void {
    this.tripService.getAllTrip().subscribe(
      response=>{
          this.tripsList=response,
          this.eventSettings = {dataSource: this.tripsList,
            fields: {
              subject: {name: 'tripName'},
              startTime: {name: 'tripStartDate'},
              endTime: {name: 'tripEndDate'}
            }}
      },
      error=>console.log(error), 
      ()=>console.log("Completed")
    )
  }
  showTripDetails=(trip:Trip)=>{
    this.router.navigate(['trip-details',trip.tripId])
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
      this.filterTripList = this.tripsList.filter((trip)=> this.prioritySet.has(trip.tripPriority.toString()));
    }
    else if(this.prioritySet.size == 0){
      this.filterTripList = this.tripsList.filter((trip)=>this.statusSet.has(trip.tripStatus.toString()));
    }else{
      this.filterTripList = this.tripsList.filter((trip)=>this.prioritySet.has(trip.tripPriority.toString()) && this.statusSet.has(trip.tripStatus.toString()));
    }
    
    let filteredSet:Set<Trip> = new Set();
    this.filterTripList.forEach((trip) => {
      filteredSet.add(trip);
    })
    this.afterFilteredList = [...filteredSet.values()];
    if(this.checked){
      this.eventSettings = {dataSource: this.afterFilteredList,
      fields:{
        subject: {name: 'tripName'},
        startTime: {name: 'tripStartDate'},
        endTime: {name: 'tripEndDate'}
      }}
    }
    else{
      this.eventSettings = {dataSource: this.tripsList,
        fields:{
          subject: {name: 'tripName'},
          startTime: {name: 'tripStartDate'},
          endTime: {name: 'tripEndDate'}
        }}
    }
  }

}
