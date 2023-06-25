import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { ReservationService } from 'src/services/reservation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.scss']
})
export class RentalFormComponent implements OnInit {

  car: any
  constructor(public dialogRef: MatDialogRef<RentalFormComponent>, private reservationService:ReservationService, @Inject(MAT_DIALOG_DATA) public ccar: any) {
    this.car = ccar.car;
   }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
  }

  submit(){
    if (this.range.valid && this.range.value.start && this.range.value.end) {
      this.reservationService.addReservation(
        this.range.controls['start'].value ?? new Date()
      , this.range.controls['end'].value ?? new Date()
      , this.car.id, localStorage.getItem("user_id")?? "0").subscribe();
      this.dialogRef.close();
    } else {
      alert('Intervalul de închiriere este invalid');
    }
  }

}
