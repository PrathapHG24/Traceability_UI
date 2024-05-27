import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
  }
  
  openDesiredComponent(navigate: any) {
    if(navigate === 'dataLogging') {
      this.router.navigate(["/dataLogging"]);
    }
    if(navigate === 'admin') {
      this.router.navigate(["/admin"]);
    }
    if(navigate === 'dailyReport') {
      this.router.navigate(["/admin/dailyReport"]);
    }
    // if(navigate === 'alarm') {
    //   this.router.navigate(["/alarm"]);
    // }
    
    // if(navigate === 'labelPrinter') {
    //   this.router.navigate(["/labelPrinterMenu"]);
    // }
    // if(navigate === 'qualityParameter') {
    //   this.router.navigate(["/qualityParameter"]);
    // }


  }
}
