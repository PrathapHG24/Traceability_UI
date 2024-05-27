import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QualityParameterRoutingModule } from './quality-parameter-routing.module';
import { QualityParameterComponent } from './components/quality-parameter/quality-parameter.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    QualityParameterComponent
  ],
  imports: [
    CommonModule,
    QualityParameterRoutingModule,
    SharedModule
  ]
})
export class QualityParameterModule { }
