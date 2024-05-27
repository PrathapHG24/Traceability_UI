import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-discard-label',
  templateUrl: './discard-label.component.html',
  styleUrls: ['./discard-label.component.scss']
})
export class DiscardLabelComponent implements OnInit {

  fromDiscardLabelCompponent:any;
  
  constructor(private router: Router, private authenticationService: AuthenticationService) { 
  
  }

  ngOnInit(): void {
    this.fromDiscardLabelCompponent = true;
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
  }

}
