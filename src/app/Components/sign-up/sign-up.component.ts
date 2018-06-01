import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/auth.service';
// import { Observable } from 'rxjsjj/Observable';
import { Observable } from 'rxjs/rx';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formInfo = {
    firstname: '',
    lastname: '',
    dob: '',
    address: '',
    email: '',
    phone: '',
    membership: '',
    username: '',
    password: '',
  };

  user: any;
  error: string;

  constructor( private myService: SessionService, private router: Router ) { }

  signup() {
    console.log(`Signup Now`);
    this.myService.signup(this.formInfo)
      .subscribe(
        (user) => {this.user = user;
          console.log(this.user);
          this.router.navigate(['/login']);
        },
        (err) => { this.error = err;
          console.log(`heyyyyy`);
        });

  }

  ngOnInit() {
    // this.myService.isLoggedIn();
  }

}
