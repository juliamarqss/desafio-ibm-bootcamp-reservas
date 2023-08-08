import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// components
import { CreateReserveComponent } from './create-reserve/create-reserve.component';
import { DeleteReserveComponent } from './delete-reserve/delete-reserve.component';
import { UpdateReserveComponent } from './update-reserve/update-reserve.component';
import { ReadReserveComponent } from './read-reserve/read-reserve.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    CreateReserveComponent,
    DeleteReserveComponent,
    UpdateReserveComponent,
    ReadReserveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    RouterModule,
  ],
  exports: [
    CreateReserveComponent,
    DeleteReserveComponent,
    UpdateReserveComponent,
    ReadReserveComponent
  ],
})
export class ReserveModule { }
