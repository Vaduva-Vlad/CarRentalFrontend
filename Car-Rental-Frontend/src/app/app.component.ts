import { Component } from '@angular/core';
import { AddCarComponent } from './add-car/add-car.component';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Car-Rental-Frontend';

  constructor(private dialog:MatDialog) { }

  openAddCarDialog(){
    this.dialog.open(AddCarComponent)
  }

  openRegisterDialog(){
    this.dialog.open(RegisterComponent)
  }
}
