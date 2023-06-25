import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from 'src/models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  update_url="http://localhost/CarRentalApi/public/api/reservations"
  by_status_url="http://localhost/CarRentalApi/public/api/reservations/byStatus/pending"

  addReservation(startDate:Date,endDate:Date,carId:string,userId:string,buletin:File,carnet:File):Observable<string>{
    let formData=new FormData()
    const start = startDate.getFullYear() + "-" + (startDate.getMonth()) + "-" + startDate.getDate()  + " " +
    startDate.getHours() + ":" + startDate.getMinutes() + ":" + startDate.getSeconds();
    const end = endDate.getFullYear() + "-" + (endDate.getMonth()) + "-" + endDate.getDate()  + " " +
    endDate.getHours() + ":" + endDate.getMinutes() + ":" + endDate.getSeconds();
    formData.append("start",start)
    formData.append("end",end)
    formData.append("car_id",carId)
    formData.append("user_id",userId)
    formData.append("personal_id",buletin)
    formData.append("driver_license",carnet)
    return this.http.post<string>(this.update_url,formData)
  }

  getPendingReservations():Observable<any>{
    return this.http.get<string>(this.by_status_url);
  }

  updateReservationStatus(reservation:Reservation):Observable<Reservation>{
    return this.http.put<Reservation>(`${this.update_url}/${reservation.id}`,reservation)
  }
}
