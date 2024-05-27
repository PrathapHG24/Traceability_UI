import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { DataLoggingCommonService } from '../../services/data-logging-common-service.service';

@Component({
  selector: 'app-error-viewer',
  templateUrl: './error-viewer.component.html',
  styleUrls: ['./error-viewer.component.scss']
})
export class ErrorViewerComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ErrorViewerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private dataLoggingCommonService: DataLoggingCommonService) {}

  onNoClick(): void {
    forkJoin([this.dataLoggingCommonService.updateErrorStatus()]).subscribe(res => {
      let msg = JSON.stringify(res);
      console.log('success', msg);
    },
    (err => {
      let msg = JSON.stringify(err.error.text);
      console.log('error', msg);
    }
    ));
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }
}
