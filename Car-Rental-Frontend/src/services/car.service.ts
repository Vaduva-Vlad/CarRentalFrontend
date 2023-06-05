import { Injectable } from '@angular/core';
import { Car } from 'src/models/Car';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  url="http://localhost/CarRentalApi/public/api/cars"

  getCars():Observable<any>{
    return this.http.get<any>(this.url)
  }

  getCar(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }
}
