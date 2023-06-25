import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/models/Car';
import { MatDialog } from '@angular/material/dialog';
import { CarDetailComponent } from '../car-detail/car-detail.component';
import { ImageService } from 'src/services/image.service';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent implements OnInit {

  constructor(private router: Router,private dialog:MatDialog,private imageService:ImageService) { }

  @Input() car:Car|undefined
  image:string|undefined

  redirectToDetails() {
    // Perform the redirect to the details route
    /*if (this.car?.id) {
      this.router.navigate([`/cars/${this.car.id}`]);
    }*/

    const dialogRef=this.dialog.open(CarDetailComponent, {
      data: {car: this.car},
      height: '100%'
    })
  }
  ngOnInit(): void {
    this.image=this.imageService.getCarImage(this.car!)
  }
}
