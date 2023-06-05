import { Component, OnInit } from '@angular/core';
import { Car } from 'src/models/Car';
import { CarListItemComponent } from '../car-list-item/car-list-item.component';
import { CarService } from 'src/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  constructor(private carService:CarService) { }
  //cars:Car[]=[{"id":1,"license_plate":"TM50SCA","price":100,"user":1},{"id":2,"license_plate":"B60BGF","price":200,"user":1}]
  cars:Car[]=[]

  ngOnInit(): void {
    this.getCars()
  }

  getCars(){
    this.carService.getCars().subscribe(result=>console.log(result))
  }
}
