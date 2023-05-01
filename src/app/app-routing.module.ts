import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

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
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./layout/layout.module').then(mod => mod.LayoutModule)
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Angular loadChildren?
