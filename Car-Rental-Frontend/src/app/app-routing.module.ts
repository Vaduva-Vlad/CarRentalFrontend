import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarMoreDetailsComponent } from './car-more-details/car-more-details.component';
import { CarDetailComponent } from './car-detail/car-detail.component';

const routes: Routes = [
  {path: 'cars', component: CarListComponent},
  {path: '',   redirectTo: '/cars', pathMatch: 'full' },
  {path: 'cars/:id', component: CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
