import { userMangementService } from './../../services/user-managment-service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/main/services/authentication.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit,OnDestroy {

  data: Array<any>
  totalRecords: number =1000
  page:number=1
  userMangementSubscription: any;

  constructor(private userElemet:userMangementService, private router: Router, private authenticationService: AuthenticationService) { 
    this.data = new Array<any>()
  }
  ngOnDestroy(): void {
    this.userMangementSubscription.unsubscribe();
  }

  ngOnInit(): void {
    if(!this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/login"]);
    }
    this.userMangementSubscription = this.userElemet.getUserData().subscribe(( data ) => {

    this.data=data.results
    this.totalRecords = data.results.length
  })
  }
  goBackToAdminMenu(){
    this.router.navigate(["/admin"]);
 
   }  
  
}
