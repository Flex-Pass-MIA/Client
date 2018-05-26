import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { SessionService } from '../../service/auth.service';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/rx';
import { ActivatedRoute } from '@angular/router';
// import { SearchService } from '../service/search.service';
import { forEach } from '@angular/router/src/utils/collection';
import { containsTree } from '@angular/router/src/url_tree';
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
  today: Date = new Date();

  error: string;
  gymReturn: any = this.mySearch.gymResults;
  // week: any = this.mySearch.gymResults[0].week[0].forEach(thing => thing.day);
  // week = this.mySearch.gymResults[0].week[0];
  thisIsWeek: any;
  show: boolean;
  theDay: any;
  gymSelected: any;
  user: any;

  constructor(public mySearch: SearchService,
    private myGymService: GymService,
    private myAuthService: SessionService) {
    this.show = false;
  }


  isDate(arrDay) {


    while (Date().includes(arrDay)) {

      // console.log('this is the current Date', Date());
      return this.show = true;

    }


  }




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
        },
        (err) => this.error = err
      );

    }

      // getArray() {
      //   // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:max-line-length
      //   // console.log(`this gets array`, this.mySearch.gymResults[0].week[0].forEach(thing => { console.log('this is the thing--->', thing.day); }));

      //   const week = this.mySearch.gymResults[0].week[0];
      //   week.forEach(element => {
      //     if (Date().includes(element.day)) {
      //       console.log('its todays day');
      //       console.log('todays day stuff', element.hours);

      //       return this.thisIsWeek = element.hours;
      //     }
      //   });

      // }
      getArray() {
      // this.theDay = this.mySearch.gymResults[0].week[0].forEach(element => element.day );
      console.log(`YOOOOO DUTYYYYY`, this.gymReturn);

      }





  ngOnInit() {
    // console.log("what is gym return:  ", this.gymReturn);
    this.user = this.myAuthService.currentUser;
    console.log('user in the search comp: ', this.user);

  }

}
