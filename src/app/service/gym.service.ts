import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class GymService {

  constructor(private http: Http) { }
  myGym: any;
  tempGym: any;

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  newGym(gymID, user) {
    const gymId = { gymId: gymID, userId: user._id };
    console.log(`THIS PART WORKS`, gymID);
    return this.http.post(`http://localhost:3000/select-gyms`, gymId)
    .map(res => {
        console.log('res is WHATTTT IS ITT!!!!!!: ', this.myGym);
        res.json();
      })
      .catch(this.handleError);
  }

  getGym() {
    return this.http.post(`http://localhost:3000/flex`, {})
    .map(res => {
      this.tempGym = res;
      this.myGym = JSON.parse(this.tempGym._body);
      console.log(`Getting Users GYM List`, this.myGym);
      res.json();
    })
    .catch(this.handleError);
  }


}
