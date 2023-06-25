import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/models/Car';
import { MatDialog } from '@angular/material/dialog';
import { CarDetailComponent } from '../car-detail/car-detail.component';
import { ImageService } from 'src/services/image.service';
import { CarService } from 'src/services/car.service';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent implements OnInit {

  constructor(private router: Router,private dialog:MatDialog,private imageService:ImageService,
     private carService:CarService, private authService: AuthenticationService) { }

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

  deleteCar() {
    this.carService.deleteCar(this.car!.id.toString()).subscribe(result => {location.reload()});
  }
  ngOnInit(): void {
    this.image=this.imageService.getCarImage(this.car!)
  }

  isAdmin(): boolean {
    return this.authService.isAdmin()
  }
}
