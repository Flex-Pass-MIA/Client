import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { SessionService } from './service/auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './service/search.service';
import { GooglemapComponent } from './googlemap/googlemap.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'signup', component: SignUpComponent },
  { path: 'search', component: SearchComponent },
  { path: 'mapTest', component: GooglemapComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SearchComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHsQ5mbZ20-fri8maikgz2H_6Wmt64LZ0',
    }),
  ],
  providers: [SessionService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
