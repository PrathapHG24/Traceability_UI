import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-socket-pressing',
  templateUrl: './socket-pressing.component.html',
  styleUrls: ['./socket-pressing.component.scss']
})
export class SocketPressingComponent implements OnInit {
  @Input() fromSocketPressingComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromSocketPressingComponent = true;
  }

}
