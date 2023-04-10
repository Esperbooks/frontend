import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavbarComponent,
    MaterialModule,
    ComponentsModule,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
