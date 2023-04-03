import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavbarComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
