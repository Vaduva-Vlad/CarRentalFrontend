import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CarListComponent } from './car-list/car-list.component';
import { CarListItemComponent } from './car-list-item/car-list-item.component';
import { CarMoreDetailsComponent } from './car-more-details/car-more-details.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CarDetailComponent } from './car-detail/car-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { RentalFormComponent } from './rental-form/rental-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './add-car/add-car.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarListItemComponent,
    CarMoreDetailsComponent,
    CarDetailComponent,
    RentalFormComponent,
    AddCarComponent,
    RegisterComponent,
    LoginComponent,
    ReservationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
