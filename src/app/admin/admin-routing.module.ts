import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { DailyReportComponent } from './components/daily-report/daily-report.component';
import { PartReportGenerateComponent } from './components/part-report-generate/part-report-generate.component';
import { ProductionReportGenerateComponent } from './components/production-report-generate/production-report-generate.component';
import { UserManagementComponent } from './components/user-management/user-management.component';

const routes: Routes = [
  { 
    path: "", 
    component: AdminHomeComponent 
  },
  { 
    path: "partReportGenerate", 
    component:  PartReportGenerateComponent
  },
  {
    path: "productionReportGenerate",
    component: ProductionReportGenerateComponent
  },
  {
    path: "userManagement",
    component: UserManagementComponent
  },
  {
    path: "dailyReport",
    component: DailyReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
