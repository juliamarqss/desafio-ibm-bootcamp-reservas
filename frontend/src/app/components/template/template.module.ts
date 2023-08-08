import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatIconModule, 
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class TemplateModule { }
