import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/models/Reservation';
import { MatDialog } from '@angular/material/dialog';
import { CarDetailComponent } from '../car-detail/car-detail.component';

@Component({
  selector: 'app-reservation-list-item',
  templateUrl: './reservation-list-item.component.html',
  styleUrls: ['./reservation-list-item.component.scss']
})
export class ReservationListItemComponent implements OnInit {

  constructor(private router: Router,private dialog:MatDialog) { }

  @Input() rezervation:Reservation|undefined
  ngOnInit(): void {
  }

  @Input() car:Reservation|undefined

  redirectToDetails() {
    // Perform the redirect to the details route
    /*if (this.car?.id) {
      this.router.navigate([`/cars/${this.car.id}`]);
    }*/

    const dialogRef=this.dialog.open(CarDetailComponent,{
      data: {car: this.car}
    })
  }
}
