import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { LoginComponent } from './login/login.component';
import { TripDashboardComponent } from './trip-dashboard/trip-dashboard.component';


@NgModule({
  declarations: [MaintenanceDashboardComponent, AdminDashboardComponent, TaskDashboardComponent, LoginComponent, TripDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
