import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { ErrorViewerComponent } from './shared/components/error-viewer/error-viewer.component';
import { DataLoggingCommonService } from './shared/services/data-logging-common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'traceability-ui';
  private refreshInterval!: number;
  private timeoutId: any;
  errorData: any;

  constructor(private dataLoggingCommonService: DataLoggingCommonService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.refreshInterval = 5000;
    this.refreshLogData();
  }



  
  private refreshLogData(): void {
    forkJoin([this.dataLoggingCommonService.checkError()]).subscribe(results => {
      this.errorData = results[0];
      if(this.errorData && this.errorData.pass_fail == 1) {
        const dialogRef = this.dialog.open(ErrorViewerComponent, {
          width: '50%',
          data: this.errorData
          // data: {name: this.name, animal: this.animal}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
      this.timeoutId = setTimeout(() => this.refreshLogData(), this.refreshInterval);
    });
  }
  
  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
