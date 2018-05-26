import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SessionService } from './service/auth.service';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SearchComponent } from './Components/search/search.component';
import { SearchService } from './service/search.service';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'signup', component: SignUpComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: `dashboard`, component: DashboardComponent },
  { path: ``, component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SearchComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
