import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthNavbarComponent } from './auth-navbar/auth-navbar.component';


@NgModule({
  declarations: [
  
    AuthComponent,
       AuthNavbarComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
