import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-quality-parameter',
  templateUrl: './quality-parameter.component.html',
  styleUrls: ['./quality-parameter.component.scss']
})
export class QualityParameterComponent implements OnInit {

  fromQualityParameterComponent: any;
 
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.fromQualityParameterComponent = true;
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
  }

}
