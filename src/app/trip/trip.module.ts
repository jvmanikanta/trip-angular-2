import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripComponent } from './trip/trip.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';


@NgModule({
  declarations: [TripComponent, TripDetailsComponent],
  imports: [
    CommonModule,
    TripRoutingModule
  ]
})
export class TripModule { }
