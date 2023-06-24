import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/services/reservation.service';
import { Reservation } from 'src/models/Reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {

  rezervations: Reservation[]=[]

  constructor(private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.getRezervations()
  }

  getRezervations(){
    this.reservationService.getRezervations().subscribe(result=>this.rezervations=result['data'])
  }
}
