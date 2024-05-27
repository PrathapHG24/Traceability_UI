import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { ngxCsv } from 'ngx-csv';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-production-report-generate',
  templateUrl: './production-report-generate.component.html',
  styleUrls: ['./production-report-generate.component.scss']
})
export class ProductionReportGenerateComponent implements OnInit {
 private gridApi: any;

 



  columnDefs: ColDef[] = [
    { field: 'athlete', sortable: true, filter: true },
    { field: 'age', sortable: true, filter: true },
    { field: 'country', sortable: true, filter: true },
    { field: 'year', sortable: true, filter: true },
    { field: 'date', sortable: true, filter: true },
    { field: 'sport', sortable: true, filter: true },
    { field: 'gold', sortable: true, filter: true },
    { field: 'silver', sortable: true, filter: true },
    { field: 'bronze', sortable: true, filter: true },
    { field: 'total', sortable: true, filter: true }

];

rowData: Observable<any[]>;

constructor(private http: HttpClient, private router: Router, private authenticationService: AuthenticationService) {
    this.rowData = this.http.get<any[]>('https://www.ag-grid.com/example-assets/olympic-winners.json');
}
ngOnInit(): void {
  if(!this.authenticationService.isUserLoggedIn()) {
    this.router.navigate(["/login"]);
  }
}
goBackToAdminMenu(){
  this.router.navigate(["/admin"]);

 } 

 
 onGridReady(params: { api: any; }) {
  this.gridApi = params.api; 
}

 export_user_production_excel(): void {
  this.gridApi.exportDataAsCsv();
}



}
