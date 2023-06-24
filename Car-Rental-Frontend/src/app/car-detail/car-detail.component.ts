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

  constructor(private route:ActivatedRoute,private carService:CarService,private dialog:MatDialog) { }

  car:Car|undefined
  @Inject(MAT_DIALOG_DATA) public data: DialogData

  ngOnInit(): void {
    this.getCar()
  }

  getCar(){
    let id=Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCar(id).subscribe(result=>this.car=result['data'])
  }

  openRentalForm(){
    const dialogRef=this.dialog.open(RentalFormComponent)
  }
}
