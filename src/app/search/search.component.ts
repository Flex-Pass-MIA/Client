import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { SessionService } from '../service/auth.service';
import { Observable } from 'rxjs/Observable';
// import { Observable } from 'rxjs/rx';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../service/search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  resultSearch: any = {};

  searchTerm: any;
  error: string;

  constructor(public mySearch: SearchService) { }

  gymSearch() {

    this.mySearch.searchResult(this.resultSearch)
    // .then( res => {
    //       console.log('res in the component ---->', res);
    // } )
    // .catch( err => {
    //   console.log('err in search component ts file: ', err);
    // } );
      .subscribe(
        (res) => {
          this.searchTerm = res;
          console.log('result search', this.searchTerm);
          // console.log('8===========D-------------');
          // console.log('result test---->', this.search);
        },
        (err) => this.error = err
      );


  }



  ngOnInit() {
  }

}
