import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/rx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  error: any;
  
  constructor(private myService: SessionService, private myRouter: Router) { }

  ngOnInit() {
    // this.myService.is
    this.user = this.myService.currentUser;
    if(this.user === undefined || this.user === null ) {
      this.myRouter.navigate(['/login']);
    }

    console.log('HELLOOOOOOOOOOOOOOOO', this.user );
  }

  logout() {
    this.myService.logout()
      .subscribe(
        (res) => console.log('logout', res),
        (err) => this.error = err
      );
  }



}

