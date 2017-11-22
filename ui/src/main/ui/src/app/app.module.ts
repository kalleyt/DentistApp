import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrimaryTestComponent } from './shared/primary_test/primary_test.component';
import { PrimaryTestService } from "./shared/primary_test/services/primary_test.service";
import { HttpModule, JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClarityModule } from "clarity-angular";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./shared/app/app.component";
import { SearchComponent } from "./shared/search/search.component";
import { LoginComponent } from "./shared/login/login.component";
import { HomeComponent } from "./shared/home/home.component";
import { RegisterComponent } from "./shared/register/register.component";
import {SearchService} from "./shared/search/search.service";
import {DentistProfileComponent} from "./shared/search/dentist-profile/dentist-profile.component";

/*const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', component: SearchComponent }
];*/

@NgModule({
  declarations: [
    AppComponent,
    PrimaryTestComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    SearchComponent,
    DentistProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    JsonpModule,
    RouterModule,
    ClarityModule,
    RouterModule.forRoot([
                           { path: 'home', component: HomeComponent },
                           { path: 'register', component: RegisterComponent },
                           { path: 'login', component: LoginComponent },
                           { path: 'search', component: SearchComponent, children: [{path:'result/:name', component: DentistProfileComponent}
                           ]}
                         ])
  ],
  providers: [
    PrimaryTestService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
