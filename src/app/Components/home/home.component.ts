import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myService: SessionService) { }

  ngOnInit() {

  }

}
