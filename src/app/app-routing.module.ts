import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: "admin",
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: "alarm",
    loadChildren: () => import('./alarm/alarm.module').then(m => m.AlarmModule)
  },
  {
    path: "dataLogging",
    loadChildren: () => import('./data-logging/data-logging.module').then(m => m.DataLoggingModule)
  },
  {
    path: "labelPrinterMenu",
    loadChildren: () => import('./label-printer-menu/label-printer-menu.module').then(m => m.LabelPrinterMenuModule)
  },
  {
    path: "qualityParameter",
    loadChildren: () => import('./quality-parameter/quality-parameter.module').then(m => m.QualityParameterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
