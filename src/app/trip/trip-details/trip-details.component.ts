import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TimelineMonthService } from '@syncfusion/ej2-angular-schedule';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';
import { Maintenence } from 'src/app/model/maintenence';
import { Trip } from 'src/app/model/trip';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-details',
  providers: [TimelineMonthService],
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip:Trip
  tripId:number
  maintenenceList: Maintenence[]
  showMaintenances: boolean = false;
  
  eventSettings: EventSettingsModel;
  constructor(private tripService:TripService,private route:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.tripId = parseInt(map.get("id"));
    });
    this.tripService.getTripById(this.tripId).subscribe(
      (ntrip) => {
       this.trip = ntrip;
      },
      (error) => console.log(error),
      () => console.log("completed")
    )

    this.tripService.getMaintenenceByTripId(this.tripId).subscribe(
      (maintenenceList) => {
        this.maintenenceList = maintenenceList;
        this.eventSettings = {dataSource: this.maintenenceList,
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

  goToTask = (maintenence: Maintenence) => {
    this.route.navigate(['maintenence-details', maintenence.maintenenceId]);
  }

}
