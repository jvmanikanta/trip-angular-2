import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripDetailsComponent } from '../trip/trip-details/trip-details.component';
import { TechniciansDetailsComponent } from './technicians-details/technicians-details.component';

const routes: Routes = [
  {path:"technicians-details/:id",component: TechniciansDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechniciansRoutingModule { }
