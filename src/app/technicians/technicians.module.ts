import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechniciansRoutingModule } from './technicians-routing.module';
import { TechniciansComponent } from './technicians/technicians.component';
import { TechniciansDetailsComponent } from './technicians-details/technicians-details.component';


@NgModule({
  declarations: [TechniciansComponent, TechniciansDetailsComponent],
  imports: [
    CommonModule,
    TechniciansRoutingModule
  ]
})
export class TechniciansModule { }
