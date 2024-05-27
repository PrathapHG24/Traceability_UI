import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-missing-label',
  templateUrl: './missing-label.component.html',
  styleUrls: ['./missing-label.component.scss']
})
export class MissingLabelComponent implements OnInit {

  fromMissingLabelComponent:any;
  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.fromMissingLabelComponent = true;
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
  }

}
