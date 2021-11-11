import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip/trip.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [TripComponent, TripDetailsComponent],
  imports: [
    CommonModule,
    ScheduleModule,
    TripRoutingModule
  ]
})
export class TripModule { }
