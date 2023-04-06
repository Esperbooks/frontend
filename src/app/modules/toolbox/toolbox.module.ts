import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolboxRoutingModule } from './toolbox-routing.module';
import { ToolboxComponent } from './toolbox.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { SharedModule } from '../../shared/shared.module';
import { TimesheetManagerComponent } from './timesheet-manager/timesheet-manager.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { LeaveManagerComponent } from './leave-manager/leave-manager.component';
import { RequisitionsComponent } from './requisitions/requisitions.component';
import { RequisitionManagerComponent } from './requisition-manager/requisition-manager.component';
import { CashAdvanceComponent } from './cash-advance/cash-advance.component';
import { AdvanceManagerComponent } from './advance-manager/advance-manager.component';


@NgModule({
  declarations: [
    ToolboxComponent,
    TimesheetComponent,
    TimesheetManagerComponent,
    LeaveRequestComponent,
    LeaveManagerComponent,
    RequisitionsComponent,
    RequisitionManagerComponent,
    CashAdvanceComponent,
    AdvanceManagerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToolboxRoutingModule
  ]
})
export class ToolboxModule { }
