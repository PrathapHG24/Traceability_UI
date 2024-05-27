import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';
import { DataLoggingCommonComponent } from './components/data-logging-common/data-logging-common.component';
import { AlarmAndQualityParameterComponent } from './components/alarm-and-quality-parameter/alarm-and-quality-parameter.component';
import { LabelPrinterMenuCommonComponent } from './components/label-printer-menu-common/label-printer-menu-common.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { AgGridModule } from 'ag-grid-angular';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { DataViewerComponent } from './components/data-viewer/data-viewer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorViewerComponent } from './components/error-viewer/error-viewer.component';
@NgModule({
  declarations: [
    DataLoggingCommonComponent,
    AlarmAndQualityParameterComponent,
    LabelPrinterMenuCommonComponent,
    DataViewerComponent,
    ErrorViewerComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    FlexModule,
    NgxPaginationModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    AgGridModule.withComponents([]),
    MatCardModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:[
    DataLoggingCommonComponent,
    AlarmAndQualityParameterComponent,
    LabelPrinterMenuCommonComponent,
    DataViewerComponent
  ]
  
})
export class SharedModule { }
