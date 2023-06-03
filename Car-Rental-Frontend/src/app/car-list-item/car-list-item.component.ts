import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/models/Car';

@Component({
  selector: 'app-car-list-item',
  templateUrl: './car-list-item.component.html',
  styleUrls: ['./car-list-item.component.scss']
})
export class CarListItemComponent implements OnInit {

  constructor(private router: Router) { }

  @Input() car:Car|undefined

  redirectToDetails() {
    // Perform the redirect to the details route
    if (this.car?.id) {
      this.router.navigate([`/cars/${this.car.id}`]);
    }
  }
  ngOnInit(): void {
  }

}
