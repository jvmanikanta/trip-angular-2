import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceDetialsComponent } from './maintenance-detials/maintenance-detials.component';


@NgModule({
  declarations: [MaintenanceComponent, MaintenanceDetialsComponent],
  imports: [
    CommonModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }
