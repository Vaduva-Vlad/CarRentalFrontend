import { Component, OnInit,Inject } from '@angular/core';
import { Car } from 'src/models/Car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/services/car.service';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RentalFormComponent } from '../rental-form/rental-form.component';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car: any

  constructor(
    private route:ActivatedRoute,
    private carService:CarService,
    private dialog:MatDialog,
     @Inject(MAT_DIALOG_DATA) public ccar: any) { 
      this.car = ccar.car;
    }

  ngOnInit(): void {
    this.getCar()
  }

  getCar(){
    this.carService.getCar(this.car?.id ?? 0).subscribe(result=>this.car=result['data']);
  }

  openRentalForm(){
    const dialogRef=this.dialog.open(RentalFormComponent)
  }
}
