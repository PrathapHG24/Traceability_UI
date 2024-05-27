import { QualityParameterComponent } from './../../../quality-parameter/components/quality-parameter/quality-parameter.component';
import { AlarmAndQualityParameterServiceService } from './../../services/alarm-and-quality-parameter-service.service';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-alarm-and-quality-parameter',
  templateUrl: './alarm-and-quality-parameter.component.html',
  styleUrls: ['./alarm-and-quality-parameter.component.scss']
})
export class AlarmAndQualityParameterComponent implements OnInit , OnDestroy{

  @Input() fromAlarmComponent: any;
  @Input() fromQualityParameterComponent: any;
 
  data: Array<any>
  totalRecords: number =1000
  page:number=1
  alarmAndQualitySubscription: any;
  constructor( private alarmElement: AlarmAndQualityParameterServiceService,  private router:Router) { 
   
     this.data = new Array<any>()

  }
  ngOnDestroy(): void {
    this.alarmAndQualitySubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.alarmAndQualitySubscription = this.alarmElement.getData().subscribe(( data ) => {
          this.data=data.results;
          this.totalRecords = data.results.length
    })
     
  }
  goBackToHome(){
   this.router.navigate(["/home"]);
  }

  
  
  export_alarm_label_excel(): void {
    let alarm_fileName = 'alarm_report'; 
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: false,
      title: 'Alarm Label Report',
      useBom: true,
      noDownload: false,
      headers: ["Name", "Date", "Time", "Alarm List", "Duration"]
    };

    alarm_fileName = alarm_fileName + new Date().getTime();
    new ngxCsv(this.data, alarm_fileName, options);
  }

  export_quality_parameter_excel(): void {
    let quality_parameter_fileName = 'quality_parameter_report'
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: false,
      title: 'Quality Parameter Report',
      useBom: true,
      noDownload: false,
      headers: ["Sub St.", "Quality Parameter", "Remarks"]
    };
    quality_parameter_fileName = quality_parameter_fileName + new Date().getTime();
    new ngxCsv(this.data, quality_parameter_fileName, options);
  }

}



