import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-ball-pressing',
  templateUrl: './ball-pressing.component.html',
  styleUrls: ['./ball-pressing.component.scss']
})
export class BallPressingComponent implements OnInit {

 
  @Input() fromBallPressingComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService){}
  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
   this.fromBallPressingComponent = true;

  }


}
