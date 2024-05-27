import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-insert-valve-assembly',
  templateUrl: './insert-valve-assembly.component.html',
  styleUrls: ['./insert-valve-assembly.component.scss']
})
export class InsertValveAssemblyComponent implements OnInit {
  @Input() fromInsertValveAssemblyComponent: any;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.fromInsertValveAssemblyComponent =true;
  }

}
