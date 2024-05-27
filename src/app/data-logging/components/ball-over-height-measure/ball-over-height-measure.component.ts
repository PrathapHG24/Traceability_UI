import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-ball-over-height-measure',
  templateUrl: './ball-over-height-measure.component.html',
  styleUrls: ['./ball-over-height-measure.component.scss']
})
export class BallOverHeightMeasureComponent implements OnInit {
  @Input() fromBallOverHeightMeasureComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromBallOverHeightMeasureComponent = true;
  }

}
