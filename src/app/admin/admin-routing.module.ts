import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';

const routes: Routes = [
  {path:"admin-dashboard", component:AdminDashboardComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
