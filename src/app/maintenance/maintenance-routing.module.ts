import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from '../task/task-details/task-details.component';
import { MaintenanceDetialsComponent } from './maintenance-detials/maintenance-detials.component';

const routes: Routes = [
  {path:"maintenence-details/:id", component: MaintenanceDetialsComponent},
  {path:"task-details/:id",component: TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
