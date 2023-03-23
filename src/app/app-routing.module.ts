import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {
    path: 'login',
    component: AuthComponent,
    data: { auth_type: 'login' }
  },
  {
    path: 'signup',
    component: AuthComponent,
    data: { auth_type: 'signup' }
  },
];

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
