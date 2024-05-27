import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-threaded-plug-assembly',
  templateUrl: './threaded-plug-assembly.component.html',
  styleUrls: ['./threaded-plug-assembly.component.scss']
})
export class ThreadedPlugAssemblyComponent implements OnInit {
  @Input() fromThreadedPlugAssemblyComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromThreadedPlugAssemblyComponent = true;
  }

}
