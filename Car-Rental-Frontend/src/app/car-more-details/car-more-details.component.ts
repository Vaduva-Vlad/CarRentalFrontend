import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-more-details',
  templateUrl: './car-more-details.component.html',
  styleUrls: ['./car-more-details.component.scss']
})
export class CarMoreDetailsComponent implements OnInit {

  licensePlate: string;
  price: number;

  constructor() { 
    this.licensePlate = '';
    this.price = 0;
  }

  onSubmit() {
    // Handle form submission here
    console.log('License Plate:', this.licensePlate);
    console.log('Price:', this.price);
    // You can perform further actions such as sending the data to an API
  }
  ngOnInit(): void {
  }

}
