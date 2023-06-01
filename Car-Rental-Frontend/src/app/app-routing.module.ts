import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarMoreDetailsComponent } from './car-more-details/car-more-details.component';

const routes: Routes = [
  {path: 'cars', component: CarListComponent},
  {path: '',   redirectTo: '/cars', pathMatch: 'full' },
  {path: 'car/:id', component: CarMoreDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
