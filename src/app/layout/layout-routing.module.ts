import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolboxComponent } from '../modules/toolbox/toolbox.component';

const routes: Routes = [
  {
    path: '',
    // component: ToolboxComponent,
    loadChildren: () => import('./../modules/modules.module').then(mod => mod.ModulesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
