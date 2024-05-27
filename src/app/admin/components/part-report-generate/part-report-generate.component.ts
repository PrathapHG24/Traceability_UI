import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { partReportService } from '../../services/part-report-service';
import { AuthenticationService } from 'src/app/main/services/authentication.service';


@Component({
  selector: 'app-part-report-generate',
  templateUrl: './part-report-generate.component.html',
  styleUrls: ['./part-report-generate.component.scss']
})
export class PartReportGenerateComponent implements OnInit,OnDestroy {

  data: Array<any>
  totalRecords: number =1000
  page:number=1
  partReportSubscription: any;
  constructor(private partElement: partReportService ,private router: Router, private authenticationService: AuthenticationService) {
    this.data = new Array<any>()
   }


   ngOnDestroy(): void {
    this.partReportSubscription.unsubscribe();
  }
  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.partReportSubscription = this.partElement.getData().subscribe(( data ) => {
      this.data=data.results
      this.totalRecords = data.results.length
  })

  }
  goBackToAdminMenu(){
    this.router.navigate(["/admin"]);
 
   } 
}
