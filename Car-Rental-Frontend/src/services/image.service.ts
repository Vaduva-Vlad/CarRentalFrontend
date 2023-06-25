import { Injectable } from '@angular/core';
import { Car } from 'src/models/Car';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getCarImage(car:Car){
    return car?.image_name ? "http://localhost/CarRentalApi/public/images/"+car.image_name: "assets/nissan.jpg"
  }
}
