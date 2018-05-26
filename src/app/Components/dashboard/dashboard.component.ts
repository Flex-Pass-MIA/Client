import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/rx';
import { Router } from '@angular/router';
import { GymService } from '../../service/gym.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  error: any;
  myFlex: any;

  constructor(
    private myService: SessionService,
    private myRouter: Router,
    private myGymService: GymService
  ) { }

  ngOnInit() {
    // console.log(`These are the gyms`, this.myGymService);
    this.user = this.myService.currentUser;
    if (this.user === undefined || this.user === null ) {
      this.myRouter.navigate(['/login']);
    }
    // console.log('HELLOOOOOOOOOOOOOOOO', this.user );
    this.myGymService.getGym();
    // console.log('HELLOOOOOOOOOOOOOOOO', this.myGymService );
  }


  getUsersGyms() {
    console.log(`Just clicked this!`)
    console.log(this.myGymService);
  }


  logout() {
    this.myService.logout()
      .subscribe(
        (res) => console.log('logout', res),
        (err) => this.error = err
      );
  }



}

