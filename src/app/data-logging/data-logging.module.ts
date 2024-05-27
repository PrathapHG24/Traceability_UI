import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { DataLoggingRoutingModule } from './data-logging-routing.module';
import { OilHoleCheckComponent } from './components/oil-hole-check/oil-hole-check.component';
import { BallPressingComponent } from './components/ball-pressing/ball-pressing.component';
import { SocketPressingComponent } from './components/socket-pressing/socket-pressing.component';
import { ScrewAndNutAssemblyComponent } from './components/screw-and-nut-assembly/screw-and-nut-assembly.component';
import { PipePlugAssemblyComponent } from './components/pipe-plug-assembly/pipe-plug-assembly.component';
import { InsertValveAssemblyComponent } from './components/insert-valve-assembly/insert-valve-assembly.component';
import { BallOverHeightMeasureComponent } from './components/ball-over-height-measure/ball-over-height-measure.component';
import { ThreadedPlugAssemblyComponent } from './components/threaded-plug-assembly/threaded-plug-assembly.component';
import { OcvPlungerAssemblyComponent } from './components/ocv-plunger-assembly/ocv-plunger-assembly.component';
import { OcvPlungerAssemblyAComponent } from './components/ocv-plunger-assembly-A/ocv-plunger-assembly-A.component';
import { MasterPistonAndErlAssmComponent } from './components/master-piston-and-erl-assm/master-piston-and-erl-assm.component';
import { MasterPistonAndErlAssmAComponent } from './components/master-piston-and-erl-assm-A/master-piston-and-erl-assm-A.component';
import { FunctionalTestRigComponent } from './components/functional-test-rig/functional-test-rig.component';
import { FunctionalTestRigAComponent } from './components/functional-test-rig-A/functional-test-rig-A.component';
import { DataLoggingComponent } from './components/data-logging/data-logging.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from '../main/main.module';
@NgModule({
  declarations: [
    OilHoleCheckComponent,
    BallPressingComponent,
    SocketPressingComponent,
    ScrewAndNutAssemblyComponent,
    PipePlugAssemblyComponent,
    InsertValveAssemblyComponent,
    BallOverHeightMeasureComponent,
    ThreadedPlugAssemblyComponent,
    OcvPlungerAssemblyComponent,
    OcvPlungerAssemblyAComponent,
    MasterPistonAndErlAssmComponent,
    MasterPistonAndErlAssmAComponent,
    FunctionalTestRigComponent,
    FunctionalTestRigAComponent,
    DataLoggingComponent,
   
  ],
  imports: [
    CommonModule,
    DataLoggingRoutingModule,
    FlexLayoutModule,
    FlexModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    SharedModule,
    MainModule
  ]
})
export class DataLoggingModule { }
