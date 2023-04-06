import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';
import { TimesheetManagerComponent } from './timesheet-manager/timesheet-manager.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveManagerComponent } from './leave-manager/leave-manager.component';
import { RequisitionsComponent } from './requisitions/requisitions.component';
import { RequisitionManagerComponent } from './requisition-manager/requisition-manager.component';
import { CashAdvanceComponent } from './cash-advance/cash-advance.component';
import { AdvanceManagerComponent } from './advance-manager/advance-manager.component';

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

  {
    path: 'timesheet-manager',
    component: TimesheetManagerComponent
  },

  {
    path: 'leave-request',
    component: LeaveRequestComponent
  },

  {
    path: 'leave-manager',
    component: LeaveManagerComponent
  },

  {
    path: 'requisitions',
    component: RequisitionsComponent
  },

  {
    path: 'requisition-manager',
    component: RequisitionManagerComponent
  },

  {
    path: 'cash-advance',
    component: CashAdvanceComponent
  },

  {
    path: 'advance-manager',
    component: AdvanceManagerComponent
  },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolboxRoutingModule { }
