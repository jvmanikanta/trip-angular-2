import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';
import { TripModule } from './trip/trip.module';
import { TaskModule } from './task/task.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { TechniciansModule } from './technicians/technicians.module';
import {HttpClientModule} from '@angular/common/http';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, MonthService, MonthAgendaService, DragAndDropService,ResizeService, TimelineMonth } from '@syncfusion/ej2-angular-schedule';
import { PopupDirective } from './directives/popup.directive';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    PopupDirective
  ],
  imports: [
    BrowserModule,
    AdminModule,
    TripModule,
    TaskModule,
    MaintenanceModule,
    TechniciansModule,
    HttpClientModule,
    GanttModule,
    AppRoutingModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [DayService, WeekService, MonthService, MonthAgendaService,DragAndDropService,ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
