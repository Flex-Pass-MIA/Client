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
  gymList: any;
  gymListError: any;
  show: boolean;

  constructor(
    private myService: SessionService,
    private myRouter: Router,
    private myGymService: GymService
  ) {
    this.show = false;
   }

  ngOnInit() {
    // console.log(`These are the gyms`, this.myGymService);
    this.user = this.myService.currentUser;
    if (this.user === undefined || this.user === null ) {
      this.myRouter.navigate(['/login']);
    }

  //   this.myService
  //     .isLoggedIn()
  //   // If success, we are logged in.
  //     .then(resultFromApi => {
  //       this.user = resultFromApi;
  //       console.log('user is: search from api results ', resultFromApi);
  //     })

  //  // Even if you don't do anything on error, catch to avoid a console error.
  //     .catch (err => {
  //       console.log(err);
  //       this.myRouter.navigate(['/login']);
  //     });


    this.getUsersGyms();

    // console.log('HELLOOOOOOOOOOOOOOOO', this.user );
    // this.myGymService.getGym(this.user);
    // console.log('HELLOOOOOOOOOOOOOOO', this.myGymService );
  }

  isDate(arrDay) {


    while (Date().includes(arrDay)) {

      // console.log('this is the current Date', Date());
      return this.show = true;

    }


  }


  getUsersGyms() {
    // console.log(`who is the user?:::::::>`);
    // console.log(`does this happen---->`, this.myGymService.getAllGyms());
    this.myGymService.getAllGyms(this.user)
    .subscribe(usersGyms => {
      console.log('are these the usersGyms????: ', usersGyms);
        this.gymList = usersGyms;

      },
      () => {
        this.gymListError = 'Sorry, no gyms listed.';
      }
    );
  }

  getSingleGym() {
    // this.myGymService.
  }


  logout() {
    this.myService.logout()
      .subscribe(
        (res) => console.log('logout', res),
        (err) => this.error = err
      );
  }



}

