import { Component, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() dataFromParent;
  @Input() favActor;
  @Input() favCountry;

  @Output() dishEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendDish(dish) {
    this.dishEvent.emit(dish);
  }
}
