import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-master-piston-and-erl-assm-A',
  templateUrl: './master-piston-and-erl-assm-A.component.html',
  styleUrls: ['./master-piston-and-erl-assm-A.component.scss']
})
export class MasterPistonAndErlAssmAComponent implements OnInit {
  @Input() fromMasterPistonAssemblyAComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromMasterPistonAssemblyAComponent = true;
  }


}
