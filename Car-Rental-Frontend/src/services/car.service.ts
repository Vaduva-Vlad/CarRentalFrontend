import { Injectable } from '@angular/core';
import { Car } from 'src/models/Car';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  url="http://localhost:8000/cars"
  cars:Car[]=[{"id":1,"license_plate":"TM50SCA","price":100,"user":1},{"id":2,"license_plate":"B60BGF","price":200,"user":1}]

  getCars():Observable<Car>{
    return this.http.get<Car>(this.url)
  }

  getCar(id:number):Observable<Car>{
    return of(this.cars[id-1])
  }
}
