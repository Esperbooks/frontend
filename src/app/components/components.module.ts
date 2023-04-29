import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { GanttChartComponent } from './gantt-chart/gantt-chart.component';
import { NgxGanttModule } from '@worktile/gantt';
import { ThyNotifyModule } from 'ngx-tethys/notify';

const components = [
  TableComponent,
  GanttChartComponent
]


@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    NgxGanttModule,
    ThyNotifyModule
  ]
})
export class ComponentsModule { }
