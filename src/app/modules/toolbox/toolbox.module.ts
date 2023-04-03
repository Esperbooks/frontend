import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolboxRoutingModule } from './toolbox-routing.module';
import { ToolboxComponent } from './toolbox.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ToolboxComponent,
    TimesheetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToolboxRoutingModule
  ]
})
export class ToolboxModule { }
