import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-label-printer-menu',
  templateUrl: './label-printer-menu.component.html',
  styleUrls: ['./label-printer-menu.component.scss']
})
export class LabelPrinterMenuComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
  }

  goBackToHome() {
    this.router.navigate(["/home"]);
  }

  openDesiredPrintLabelComponent(navigate: any) {
    if(navigate === 'printLabel') {
      this.router.navigate(["/labelPrinterMenu/printLabel"]);
    }
    if(navigate === 'issuedLabel') {
      this.router.navigate(["/labelPrinterMenu/issuedLabel"]);
    }
    if(navigate === 'missingLabel') {
      this.router.navigate(["/labelPrinterMenu/missingLabel"]);
    }
    if(navigate === 'discardLabel') {
      this.router.navigate(["/labelPrinterMenu/discardLabel"]);
    }
  }

}
