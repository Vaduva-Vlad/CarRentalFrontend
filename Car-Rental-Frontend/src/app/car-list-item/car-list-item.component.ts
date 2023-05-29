import { Component, OnInit,Input } from '@angular/core';
import { Car } from 'src/models/Car';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent implements OnInit {

  constructor() { }

  @Input() car:Car|undefined

  ngOnInit(): void {
  }

}
