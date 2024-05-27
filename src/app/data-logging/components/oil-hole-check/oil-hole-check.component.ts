import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';
@Component({
  selector: 'app-oil-hole-check',
  templateUrl: './oil-hole-check.component.html',
  styleUrls: ['./oil-hole-check.component.scss']
})

export class OilHoleCheckComponent implements OnInit {

  @Input() fromOilHoleCheckingComponent : any;


constructor(private router: Router, private authenticationService: AuthenticationService){}

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromOilHoleCheckingComponent = true;

  }


}
