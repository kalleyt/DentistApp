import { Component, OnInit } from '@angular/core';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import 'clarity-icons/shapes/technology-shapes';
import {DentistProfileService} from "./dentist-profile.service";

@Component({
  selector: 'dentist-profile',
  templateUrl: './dentist-profile.component.html',
  styleUrls: ['./dentist-profile.component.css'],
  providers: [DentistProfileService]
})
export class DentistProfileComponent implements OnInit {

  constructor(private service: DentistProfileService) {

  }
  ngOnInit() { }

}
