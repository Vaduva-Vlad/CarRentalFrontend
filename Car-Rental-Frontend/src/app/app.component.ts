import { Component } from '@angular/core';
import { AddCarComponent } from './add-car/add-car.component';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Car-Rental-Frontend';

  constructor(private dialog:MatDialog,private authenticationService:AuthenticationService) { }

  openAddCarDialog(){
    this.dialog.open(AddCarComponent)
  }

  openRegisterDialog(){
    this.dialog.open(RegisterComponent)
  }
  openLoginDialog(){
    this.dialog.open(LoginComponent)
  }

  isLoggedIn(){
    return this.authenticationService.isLoggedIn();
  }

  logout(){
    this.authenticationService.logout()
    location.reload()
  }

  isAdmin(){
    return this.authenticationService.isAdmin()
  }
}
