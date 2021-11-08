import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceComponent } from './maintenance/maintenance/maintenance.component';
import { TaskComponent } from './task/task/task.component';

const routes: Routes = [
  {path:"maintenance", component:MaintenanceComponent},
  {path:"task", component:TaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
