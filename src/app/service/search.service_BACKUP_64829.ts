import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  results: any;
  gymResults: Array<any> = [];
  constructor(private http: Http) { }

  searchResult(x) {
    console.log('x is : ', x);
    return this.http.post(`http://localhost:3000/search/gymsearch`, x)
    .map(res => {
      this.results = res;
<<<<<<< HEAD
      console.log('this is res', res);
      console.log('res in search service:----->', JSON.parse(this.results._body));
      const searchResult = JSON.parse(this.results._body);
      console.log('this is search result ---->', searchResult);
      searchResult.json();
=======
      console.log(`get the results bruhuuhuhuhuhu`, this.results._body);
      // console.log(`get the results MAMAMAMAMAMAMAMA`, this.results);
      this.gymResults = JSON.parse(this.results._body);
      // console.log('res in search service:----->', JSON.parse(this.results._body));
      // this.gymResults.push(JSON.parse(this.results._body));
      console.log(`This is GymResults========>>>>>>!!!!!!!`, this.gymResults);
      res.json();
>>>>>>> 47242013d504bd48f377503ca15d83e15ee93042
    })
      .catch(this.handleError);
  }




  handleError(e) {
    return Observable.throw(e.json().message);
  }





}
