import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-functional-test-rig-A',
  templateUrl: './functional-test-rig-A.component.html',
  styleUrls: ['./functional-test-rig-A.component.scss']
})
export class FunctionalTestRigAComponent implements OnInit {
  @Input() fromFunctionalTestRigAComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromFunctionalTestRigAComponent = true;
  }

}
