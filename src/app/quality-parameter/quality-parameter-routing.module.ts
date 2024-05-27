import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualityParameterComponent } from './components/quality-parameter/quality-parameter.component';

const routes: Routes = [
  { 
    path: "", 
    component: QualityParameterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualityParameterRoutingModule { }
