import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
  }

  getPendingReservations(){
    this.reservationService.getPendingReservations().subscribe(response=>console.log(response))
  }
}
