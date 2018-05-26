import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/rx';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formInfo = {
    firstName: '',
    lastName: '',
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

  constructor( private myService: SessionService ) { }

  signup() {
    console.log(`Signup Now`);
    this.myService.signup(this.formInfo)
      .subscribe(
        (user) => {this.user = user;
          console.log(this.user);
        },
        (err) => this.error = err
      );
      console.log(`heyyyyy`);

  }

  ngOnInit() {
  }

}
