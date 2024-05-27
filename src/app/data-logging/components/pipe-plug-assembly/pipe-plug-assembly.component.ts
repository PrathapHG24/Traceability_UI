import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-pipe-plug-assembly',
  templateUrl: './pipe-plug-assembly.component.html',
  styleUrls: ['./pipe-plug-assembly.component.scss']
})
export class PipePlugAssemblyComponent implements OnInit {
  @Input() fromPipePluAssemblyComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromPipePluAssemblyComponent = true;
  }

}
