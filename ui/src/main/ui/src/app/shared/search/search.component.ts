import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Dentist} from "./dentist.model";
import {SearchService} from "./search.service";

@Component({
  selector: 'search-component',
  templateUrl: 'search.component.html',
  styleUrls: ["search.component.css"],
  providers: []
})
export class SearchComponent implements OnInit {

  public dentists: Dentist[] = [];
  public currentDentist;

  constructor(private service: SearchService) {
  }

  selected(city:string){
    this.service.getDentistsByCity(city).subscribe(data => this.dentists = data,
      error => console.log(error));
  }

  searchByName(name:string){
    this.service.getDentistsByName(name).subscribe(data => this.dentists = data,
      error => console.log(error));
  }

  rating(rating:string){
    this.service.getDentistsByRating(rating).subscribe(data => this.dentists = data,
      error => console.log(error));
  }

  typeDentist(type:string){
    this.service.getDentistsByType(type).subscribe(data => this.dentists = data,
      error => console.log(error));
  }

  update() {
    //this.userProfile.sendData();
  }
  ngOnInit() { }

}
