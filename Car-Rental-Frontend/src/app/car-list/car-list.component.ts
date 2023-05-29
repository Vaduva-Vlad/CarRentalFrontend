import { Component, OnInit } from '@angular/core';
import { Car } from 'src/models/Car';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor() { }
  cars:Car[]=[{"id":1,"license_plate":"TM50SCA","price":100,"user":1},{"id":2,"license_plate":"B60BGF","price":200,"user":1}]

  ngOnInit(): void {
  }

}
