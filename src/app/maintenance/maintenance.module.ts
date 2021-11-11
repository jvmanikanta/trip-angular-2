import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { MaintenanceDetialsComponent } from './maintenance-detials/maintenance-detials.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { RecurrenceEditorModule, ScheduleModule } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [MaintenanceComponent, MaintenanceDetialsComponent,SidebarComponent],
  imports: [
    CommonModule,
    GanttModule,
    ScheduleModule, RecurrenceEditorModule,
    MaintenanceRoutingModule
  ]
})
export class MaintenanceModule { }
