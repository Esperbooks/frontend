import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'timesheet',
    pathMatch: 'full'
  },

  {
    path: 'timesheet',
    component: TimesheetComponent
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolboxRoutingModule { }
