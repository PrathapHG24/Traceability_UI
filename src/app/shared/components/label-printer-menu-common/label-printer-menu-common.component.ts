import { Router } from '@angular/router';
import { LabelPrinterMenuServiceService } from './../../services/label-printer-menu-service.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as XLSX from 'xlsx'; 
@Component({
  selector: 'app-label-printer-menu-common',
  templateUrl: './label-printer-menu-common.component.html',
  styleUrls: ['./label-printer-menu-common.component.scss']
})
export class LabelPrinterMenuCommonComponent implements OnInit, OnDestroy {

  @Input() fromDiscardLabelCompponent:any;
  @Input() fromIssuedLabelComponent:any;
  @Input() fromPrintLabelComponent:any;
  @Input() fromMissingLabelComponent:any;

  data: Array<any>
  totalRecords: number =1000
  page:number=1
  labelPrinterSubscription: any;

  constructor(private labelElemet:LabelPrinterMenuServiceService, private router: Router) { 
    this.data = new Array<any>()
  }
  ngOnDestroy(): void {
    this.labelPrinterSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.labelPrinterSubscription = this.labelElemet.getLabelData().subscribe(( data ) => {

    this.data=data.results
    this.totalRecords = data.results.length
  })
  }

  goBackToHome() {
    this.router.navigate(["/home"]);
  }
 /*name of the excel-file which will be downloaded. */ 
print_fileName = 'print_label-list.xlsx';  
issued_filename = 'issued_label-list.xlsx';
missing_filename = 'missing_label-list.xlsx';
discard_filename = 'discard_label-list.xlsx';
export_print_label_excel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('print_label-list'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.print_fileName);
			
    }
export_issued_label_excel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('issued_label-list'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.issued_filename);
			
    }
    export_missing_label_excel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('missing_label-list'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.missing_filename);
			
    }  
    export_discard_label_excel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('discard_label-list'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.discard_filename);
			
    }      
}