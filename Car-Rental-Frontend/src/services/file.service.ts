import { Injectable } from '@angular/core';
import { Reservation } from 'src/models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  getLicenseURL(reservation:Reservation){
    return "http://localhost/CarRentalApi/public/documents/"+reservation.driver_license
  }

  getIdentificationURL(reservation:Reservation){
    return "http://localhost/CarRentalApi/public/documents/"+reservation.personal_id
  }
}
