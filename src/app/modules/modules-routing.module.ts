import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },

  {
    path: 'toolbox',
    loadChildren: () => import('./toolbox/toolbox.module').then(mod => mod.ToolboxModule)
  },

  {
    path: 'project-management',
    loadChildren: () => import('./project-management/project-management.module').then(mod => mod.ProjectManagementModule)
  },

  {
    path: 'accounting',
    loadChildren: () => import('./accounting/accounting.module').then(mod => mod.AccountingModule)
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
