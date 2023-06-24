import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ReservationService } from 'src/services/reservation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.scss']
})
export class RentalFormComponent implements OnInit {

  car: any
  constructor(private reservationService:ReservationService, @Inject(MAT_DIALOG_DATA) public ccar: any) {
    this.car = ccar.car;
   }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
  }

  submit(){
    this.reservationService.addReservation(
      this.range.controls['start'].value ?? new Date()
    , this.range.controls['end'].value ?? new Date()
    , this.car.id, '5').subscribe();
  }

}
