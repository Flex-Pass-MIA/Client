import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { SessionService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/rx';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../service/search.service';
import { GymService } from '../../service/gym.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  resultSearch: any = {};
  searchTerm: any;

  error: string;
  gymReturn: any = this.mySearch.gymResults;

  constructor(public mySearch: SearchService,
    private myGymService: GymService,
    private myAuthService: SessionService) { }

  theDay: any;
  gymSelected: any;
  user: any;

  addGym(gymID, user) {
    console.log(gymID);
    this.myGymService.newGym(gymID, user)
    .subscribe(
      (gymAdded) => {
      console.log(gymAdded);
    },
    (err) => { this.error = err;
      console.log('Unsucessfully Added Gym');
    });
  }

  gymSearch() {
    console.log(`this is Search Term====>>>>>>`, this.resultSearch.searchTerm);
    this.mySearch.searchResult(this.resultSearch)
      .subscribe(
        (res) => {
          this.resultSearch.searchTerm = res;
          // console.log('result search ========>>>>>', this.gymReturn);
          // console.log('result test---->', this.search);
        },
        (err) => this.error = err
      );

    }
      getArray() {
      // this.theDay = this.mySearch.gymResults[0].week[0].forEach(element => element.day );
      console.log(`YOOOOO DUTYYYYY`, this.gymReturn);

      }





  ngOnInit() {
    this.user = this.myAuthService.currentUser;
    console.log("user in the search comp: ", this.user);

  }

}
