import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
import { LogDataService } from '../../services/log-data.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-data-logging',
  templateUrl: './data-logging.component.html',
  styleUrls: ['./data-logging.component.scss']
})
export class DataLoggingComponent implements OnInit, OnDestroy {

  constructor(private router: Router, private authenticationService: AuthenticationService, private logDataService: LogDataService) { }

  private refreshInterval!: number;
  private timeoutId: any;
  machineData: any;

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }

    this.refreshInterval = 2000;
    this.refreshLogData();
    // this.logDataService.getLogData().subscribe( (data) => {
    //   this.machineData = data;
    //   console.log("results = ", data);
    // })
  }

  private refreshLogData(): void {
    // this.logDataService.getLogData().subscribe( (data) => {
    //   this.machineData = data;
    //   console.log("results = ", data);

    // })
    forkJoin([this.logDataService.getLogData()]).subscribe(results => {
      this.machineData = results[0];
      this.timeoutId = setTimeout(() => this.refreshLogData(), this.refreshInterval);
    });
  }

  public ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  goBackToHome(){

    this.router.navigate(["/home"]);

   }  
   openDesiredComponentDataLogging(navigate: any) {

    if(navigate === 'ballOverHeightMeasure') {
      this.router.navigate(["/dataLogging/ballOverHeightMeasure"]);
    }

    if(navigate === 'ballPressing') {
      this.router.navigate(["/dataLogging/ballPressing"]);
    }

    if(navigate === 'functionalTestRig') {
      this.router.navigate(["/dataLogging/functionalTestRig"]);
    }
    
    if(navigate === 'functionalTestRigA') {
      this.router.navigate(["/dataLogging/functionalTestRigA"]);
    }
    
    if(navigate === 'insertValveAssembly') {
      this.router.navigate(["/dataLogging/insertValveAssembly"]);
    }
    if(navigate === 'masterPistonAndErlAssm') {
      this.router.navigate(["/dataLogging/masterPistonAndErlAssm"]);
    }
    if(navigate === 'masterPistonAndErlAssmA') {
      this.router.navigate(["/dataLogging/masterPistonAndErlAssmA"]);
    }
    if(navigate === 'ocvPlungerAssembly') {
      this.router.navigate(["/dataLogging/ocvPlungerAssembly"]);
    }
    if(navigate === 'ocvPlungerAssemblyA') {
      this.router.navigate(["/dataLogging/ocvPlungerAssemblyA"]);
    }
    if(navigate === 'oilHoleCheck') {
      this.router.navigate(["/dataLogging/oilHoleCheck"]);
    }
    if(navigate === 'pipePlugAssembly') {
      this.router.navigate(["/dataLogging/pipePlugAssembly"]);
    }
    if(navigate === 'screwAndNutAssembly') {
      this.router.navigate(["/dataLogging/screwAndNutAssembly"]);
    }
    if(navigate === 'socketProcessing') {
      this.router.navigate(["/dataLogging/socketProcessing"]);
    }
    if(navigate === 'threadedPlugAssembly') {
      this.router.navigate(["/dataLogging/threadedPlugAssembly"]);
    }
  }

}
