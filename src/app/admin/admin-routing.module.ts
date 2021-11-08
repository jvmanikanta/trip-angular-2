import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';

const routes: Routes = [
  {path:"maintenence-dashboard", component:MaintenanceDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
