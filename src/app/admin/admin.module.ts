import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductionReportGenerateComponent } from './components/production-report-generate/production-report-generate.component';
import { PartReportGenerateComponent } from './components/part-report-generate/part-report-generate.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DailyReportComponent } from './components/daily-report/daily-report.component';
import { MainModule } from '../main/main.module';
import { NotificationModule } from '../main/notification.module';
@NgModule({
  declarations: [
    ProductionReportGenerateComponent,
    PartReportGenerateComponent,
    UserManagementComponent,
    AdminHomeComponent,
    DailyReportComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AgGridModule.withComponents([]),
    NgxPaginationModule,
    MatCheckboxModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    MainModule,
    NotificationModule
  ]
})
export class AdminModule { }
