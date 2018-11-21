import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentCount: number;
  actor: string;
  favActor: string;
  favCountry: string;
  childFavDish: string;

  constructor() { }

  ngOnInit() {
    this.parentCount = 0;
    this.actor = this.favActor = '';
  }

  incrementCount() {
    ++this.parentCount;
  }

  decrementCount() {
    --this.parentCount;
  }

  sendActorData() {
    this.favActor = this.actor;
  }

  sendCountry(country) {
    this.favCountry = country;
  }

  getFavDish(event) {
    //console.log(event);
    this.childFavDish = event;
  }
}
