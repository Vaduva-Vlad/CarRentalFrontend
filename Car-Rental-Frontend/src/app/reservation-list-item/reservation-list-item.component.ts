import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/models/Reservation';
import { MatDialog } from '@angular/material/dialog';
import { CarDetailComponent } from '../car-detail/car-detail.component';
import { ReservationService } from 'src/services/reservation.service';
import { FileService } from 'src/services/file.service';

@Component({
  selector: 'app-reservation-list-item',
  templateUrl: './reservation-list-item.component.html',
  styleUrls: ['./reservation-list-item.component.scss']
})
export class ReservationListItemComponent implements OnInit {

  constructor(private router: Router,private dialog:MatDialog,private reservationService:ReservationService,private fileService:FileService) { }

  license:string|undefined
  personal_id:string|undefined

  @Input() rezervation:Reservation|undefined
  ngOnInit(): void {
    this.license=this.fileService.getLicenseURL(this.rezervation!);
    this.personal_id=this.fileService.getIdentificationURL(this.rezervation!);
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

  updateReservationStatus(status:string){
    this.rezervation!.status=status
    this.reservationService.updateReservationStatus(this.rezervation!).subscribe(reponse=>location.reload())
  }
}
