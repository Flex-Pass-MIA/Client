import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  temporaryUser: any;
  currentUser: BehaviorSubject<string>;

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`http://localhost:3000/api/signup`, user, { withCredentials: true})
      .map(res => {
        console.log('res is: ', res);
        res.json();
      })
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`http://localhost:3000/api/login`, user, { withCredentials: true})
      .map(res => {

        this.temporaryUser = res;

        // console.log(`something in front --->`, res);


        console.log(`Asian LOVEEEEEEE`, JSON.parse(this.temporaryUser._body));
        this.currentUser = new BehaviorSubject(JSON.parse(this.temporaryUser._body));
        // res.json();
      })
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`http://localhost:3000/api/logout`, {})
      .map(res => {
        this.currentUser = new BehaviorSubject(null);
        res.json();
      })
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`http://localhost:3000/api/loggedin`, { withCredentials: true })
    .toPromise()
      .then(res => {
        this.temporaryUser = res;

        this.currentUser = new BehaviorSubject(JSON.parse(this.temporaryUser._body));
        // res.json();
        })
      .catch( err => {
        this.currentUser = new BehaviorSubject(null);
        console.log('Error on isLoggedIn function:', err);
      });
  }


}
