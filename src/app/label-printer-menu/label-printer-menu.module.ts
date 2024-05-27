import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelPrinterMenuRoutingModule } from './label-printer-menu-routing.module';
import { LabelPrinterMenuComponent } from './components/label-printer-menu/label-printer-menu.component';
import { PrintLabelComponent } from './components/print-label/print-label.component';
import { IssuedLabelComponent } from './components/issued-label/issued-label.component';
import { MissingLabelComponent } from './components/missing-label/missing-label.component';
import { DiscardLabelComponent } from './components/discard-label/discard-label.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LabelPrinterMenuComponent,
    PrintLabelComponent,
    IssuedLabelComponent,
    MissingLabelComponent,
    DiscardLabelComponent
  ],
  imports: [
    CommonModule,
    LabelPrinterMenuRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class LabelPrinterMenuModule { }
