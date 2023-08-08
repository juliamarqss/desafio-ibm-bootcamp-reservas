import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// views
import { HomeComponent } from './home/home.component';
import { ReserveComponent } from './reserve/reserve.component';
import { Error404Component } from './error404/error404.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

//  module
import { ReserveModule } from '../components/reserve/reserve.module';

@NgModule({
  declarations: [HomeComponent, ReserveComponent, Error404Component],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    ReserveModule,
    RouterModule
  ],
  exports: [HomeComponent, ReserveComponent, Error404Component],
})
export class ViewsModule { }
