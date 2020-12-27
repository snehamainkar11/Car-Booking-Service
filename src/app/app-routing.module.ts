import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServicesComponent} from './services/services.component';
import {CarsizeComponent} from './carsize/carsize.component';
import {PriceComponent} from './price/price.component';
import {ContactComponent} from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"services/carsize",
    component:CarsizeComponent
  },
  {
    path:"services/carsize/price",
    component:PriceComponent
  },
  {
    path:"contact",
    component:ContactComponent
  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
