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
  gymReturn: any = this.mySearch.gymResults;

  constructor(public mySearch: SearchService) { }



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
        console.log(`this gets array`, this.gymReturn);
      }




  ngOnInit() {
  }

}
