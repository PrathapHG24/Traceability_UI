import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmRoutingModule } from './alarm-routing.module';
import { AlarmComponent } from './components/alarm/alarm.component';


@NgModule({
  declarations: [
    AlarmComponent
  ],
  imports: [
    CommonModule,
    AlarmRoutingModule,
    SharedModule
  ]
})
export class AlarmModule { }
