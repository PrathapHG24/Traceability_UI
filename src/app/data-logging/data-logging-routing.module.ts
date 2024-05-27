import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BallOverHeightMeasureComponent } from './components/ball-over-height-measure/ball-over-height-measure.component';
import { BallPressingComponent } from './components/ball-pressing/ball-pressing.component';
import { DataLoggingComponent } from './components/data-logging/data-logging.component';
import { FunctionalTestRigComponent } from './components/functional-test-rig/functional-test-rig.component';
import { FunctionalTestRigAComponent } from './components/functional-test-rig-A/functional-test-rig-A.component';
import { InsertValveAssemblyComponent } from './components/insert-valve-assembly/insert-valve-assembly.component';
import { MasterPistonAndErlAssmComponent } from './components/master-piston-and-erl-assm/master-piston-and-erl-assm.component';
import { OcvPlungerAssemblyComponent } from './components/ocv-plunger-assembly/ocv-plunger-assembly.component';
import { OilHoleCheckComponent } from './components/oil-hole-check/oil-hole-check.component';
import { PipePlugAssemblyComponent } from './components/pipe-plug-assembly/pipe-plug-assembly.component';
import { ScrewAndNutAssemblyComponent } from './components/screw-and-nut-assembly/screw-and-nut-assembly.component';
import { SocketPressingComponent } from './components/socket-pressing/socket-pressing.component';
import { ThreadedPlugAssemblyComponent } from './components/threaded-plug-assembly/threaded-plug-assembly.component';
import { OcvPlungerAssemblyAComponent } from './components/ocv-plunger-assembly-A/ocv-plunger-assembly-A.component';
import { MasterPistonAndErlAssmAComponent } from './components/master-piston-and-erl-assm-A/master-piston-and-erl-assm-A.component';

const routes: Routes = [
  { 
    path: "", 
    component: DataLoggingComponent
  },
  { 
    path: "ballOverHeightMeasure", 
    component: BallOverHeightMeasureComponent
  },
  { 
    path: "ballPressing", 
    component: BallPressingComponent
  },
  { 
    path: "functionalTestRig", 
    component: FunctionalTestRigComponent
  },
  { 
    path: "functionalTestRigA", 
    component: FunctionalTestRigAComponent
  },
  { 
    path: "insertValveAssembly", 
    component: InsertValveAssemblyComponent
  },
  { 
    path: "masterPistonAndErlAssm", 
    component: MasterPistonAndErlAssmComponent
  },
  { 
    path: "masterPistonAndErlAssmA", 
    component: MasterPistonAndErlAssmAComponent
  },
  { 
    path: "ocvPlungerAssembly", 
    component: OcvPlungerAssemblyComponent
  },
  { 
    path: "ocvPlungerAssemblyA", 
    component: OcvPlungerAssemblyAComponent
  },
  { 
    path: "oilHoleCheck", 
    component: OilHoleCheckComponent
  },
  { 
    path: "pipePlugAssembly", 
    component: PipePlugAssemblyComponent
  },
  { 
    path: "screwAndNutAssembly", 
    component: ScrewAndNutAssemblyComponent
  },
  { 
    path: "socketProcessing", 
    component: SocketPressingComponent
  },
  { 
    path: "threadedPlugAssembly", 
    component: ThreadedPlugAssemblyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataLoggingRoutingModule { }
