import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  url="http://localhost/CarRentalApi/public/api/reservations"

  addReservation(startDate:Date,endDate:Date,carId:string,userId:string):Observable<string>{
    let formData=new FormData()
    const start = startDate.getFullYear() + "-" + (startDate.getMonth()) + "-" + startDate.getDate()  + " " +
    startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds();
    const end = endDate.getFullYear() + "-" + (endDate.getMonth()) + "-" + endDate.getDate()  + " " +
    endDate.getHours() + ":" + endDate.getMinutes() + ":" + endDate.getSeconds();
    formData.append("start",start)
    formData.append("end",end)
    formData.append("car_id",carId)
    formData.append("user_id",userId)

    return this.http.post<string>(this.url,formData)
  }
}
