import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-functional-test-rig',
  templateUrl: './functional-test-rig.component.html',
  styleUrls: ['./functional-test-rig.component.scss']
})
export class FunctionalTestRigComponent implements OnInit {
  @Input() fromFunctionalTestRigComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromFunctionalTestRigComponent = true;
  }

}
