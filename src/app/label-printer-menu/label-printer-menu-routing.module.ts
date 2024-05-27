import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscardLabelComponent } from './components/discard-label/discard-label.component';
import { IssuedLabelComponent } from './components/issued-label/issued-label.component';
import { LabelPrinterMenuComponent } from './components/label-printer-menu/label-printer-menu.component';
import { MissingLabelComponent } from './components/missing-label/missing-label.component';
import { PrintLabelComponent } from './components/print-label/print-label.component';

const routes: Routes = [
  { 
    path: "", 
    component: LabelPrinterMenuComponent
  },
  { 
    path: "discardLabel", 
    component: DiscardLabelComponent
  },
  { 
    path: "issuedLabel", 
    component: IssuedLabelComponent
  },
  { 
    path: "missingLabel", 
    component: MissingLabelComponent
  },
  { 
    path: "printLabel", 
    component: PrintLabelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabelPrinterMenuRoutingModule { }
