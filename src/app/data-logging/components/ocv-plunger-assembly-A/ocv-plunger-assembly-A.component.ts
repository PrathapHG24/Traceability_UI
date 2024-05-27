import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-ocv-plunger-assembly-A',
  templateUrl: './ocv-plunger-assembly-A.component.html',
  styleUrls: ['./ocv-plunger-assembly-A.component.scss']
})
export class OcvPlungerAssemblyAComponent implements OnInit {
 
  @Input() fromOcvPlungerAssemblyAComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
  this.fromOcvPlungerAssemblyAComponent =true;
  }


}
