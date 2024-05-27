import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-screw-and-nut-assembly',
  templateUrl: './screw-and-nut-assembly.component.html',
  styleUrls: ['./screw-and-nut-assembly.component.scss']
})
export class ScrewAndNutAssemblyComponent implements OnInit {
  @Input() fromScrewAndNutAssemblyComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromScrewAndNutAssemblyComponent = true;
  }

}
