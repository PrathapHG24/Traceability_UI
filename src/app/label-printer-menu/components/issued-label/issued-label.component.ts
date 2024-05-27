import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-issued-label',
  templateUrl: './issued-label.component.html',
  styleUrls: ['./issued-label.component.scss']
})
export class IssuedLabelComponent implements OnInit {
  fromIssuedLabelComponent : any;
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.fromIssuedLabelComponent=true;
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
  }

}
