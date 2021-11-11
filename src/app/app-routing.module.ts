import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance/maintenance.component';
import { TaskComponent } from './task/task/task.component';
import { TechniciansComponent } from './technicians/technicians/technicians.component';
import { TripComponent } from './trip/trip/trip.component';

const routes: Routes = [
  {path:"maintenance", component:MaintenanceComponent},
  {path:"tasks", component:TaskComponent},
  {path:"trips",component:TripComponent},
  {path:"", component:HomeComponent},
  {path:"technician", component:TechniciansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
