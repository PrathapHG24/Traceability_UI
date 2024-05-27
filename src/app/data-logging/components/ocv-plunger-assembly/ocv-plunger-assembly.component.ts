import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-ocv-plunger-assembly',
  templateUrl: './ocv-plunger-assembly.component.html',
  styleUrls: ['./ocv-plunger-assembly.component.scss']
})
export class OcvPlungerAssemblyComponent implements OnInit {
  @Input() fromOcvPlungerAssemblyComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
  this.fromOcvPlungerAssemblyComponent =true;
  }


}
