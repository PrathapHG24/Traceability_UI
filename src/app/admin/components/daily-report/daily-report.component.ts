import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { LogDataService } from 'src/app/data-logging/services/log-data.service';
import { NotificationType } from 'src/app/main/enum/notification-type.enum';
import { NotificationService } from 'src/app/main/services/notification.service';
import * as moment from 'moment';

@Component({
  selector: 'app-daily-report',
  templateUrl: './daily-report.component.html',
  styleUrls: ['./daily-report.component.scss']
})
export class DailyReportComponent implements OnInit, OnDestroy {
  private refreshInterval!: number;
  private timeoutId: any;
  machineData: any;
  pastMonthDate: any;
  pastMonthDateForMessage: any;
  deleteMsg!: string;
  deleteFlag!: boolean;

  constructor(private router: Router, private logDataService: LogDataService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.deleteFlag = false;
    this.refreshInterval = 2000;
    this.refreshLogData();
  }

  private refreshLogData(): void { 
    forkJoin([this.logDataService.getDailyReport()]).subscribe(results => {
      this.machineData = results[0];
      this.timeoutId = setTimeout(() => this.refreshLogData(), this.refreshInterval);
    });
  }

  closeDiv() {
    this.deleteFlag = false;
  }

  deleteLine1() {
    this.pastMonthDate = '' + moment().subtract(1, 'months').format('yyyy-MM-DD');
    forkJoin([this.logDataService.deleteLine1(this.pastMonthDate)]).subscribe(res => {
      this.deleteFlag = true;
      let msg = JSON.stringify(res);
      console.log('success', msg);
      this.deleteMsg = msg;
      this.notificationService.notify(NotificationType.SUCCESS, msg);
    },
    (err => {
      this.deleteFlag = true;
      let msg = JSON.stringify(err.error.text);
      console.log('error', msg);
      this.deleteMsg = msg;
      this.notificationService.notify(NotificationType.SUCCESS, msg);
    }
    ));
    // this.logDataService.deleteLine1(this.pastMonthDate).subscribe(message => {
    //   let msg = '' + message; 
    //   this.notificationService.notify(NotificationType.SUCCESS, msg);
    // })
  }

  goBackToHome(){
    this.router.navigate(["/home"]);
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

}
