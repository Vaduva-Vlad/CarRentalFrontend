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

  addCar(license_plate:string,price:number,model:string,description:string,image:File):Observable<string>{
    let formData=new FormData()
    formData.append("license_plate",license_plate)
    formData.append("price",price.toString())
    formData.append("model",model)
    formData.append("description",description)
    formData.append("image",image)
    formData.append("user_id",'5')

    return this.http.post<string>(this.url,formData)
  }
}
