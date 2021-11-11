import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task/task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MaintenanceModule } from '../maintenance/maintenance.module';



@NgModule({
  declarations: [TaskComponent, TaskDetailsComponent],
  imports: [
    CommonModule,
    ScheduleModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
