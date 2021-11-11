import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripDetailsComponent } from './trip-details/trip-details.component';

const routes: Routes = [
  {path:"trip-details/:id", component:TripDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }
