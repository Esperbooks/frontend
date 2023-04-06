import { Component, OnInit } from '@angular/core';
import { ColumnProps } from '../../../components/table/table.component';

@Component({
  selector: 'eb-timesheet-manager',
  templateUrl: './timesheet-manager.component.html',
  styleUrls: ['./timesheet-manager.component.scss']
})
export class TimesheetManagerComponent implements OnInit {
  timesheetManagerProps: ColumnProps[] = [
    {
      header: 'S/N',
      prop: 'index'
    },
    {
      header: 'ID',
      prop: 'id'
    },
    {
      header: 'Name',
      prop: 'name'
    },
    {
      header: 'Utilized Hours',
      prop: 'utilizedHours'
    },
    {
      header: 'Non Utilized Hours',
      prop: 'nonUtilizedHours'
    },
    {
      header: 'Total Work Days',
      prop: 'totalWorkDays'
    },
    {
      header: 'Total work Hours',
      prop: 'totalWorkHours'
    },
    {
      header: 'Efficiency',
      prop: 'efficiency'
    },
  ]

  timesheetManagerData: any[] = []

  ngOnInit(): void {
    this.getTimesheetData();
  }
  getTimesheetData() {
    this.timesheetManagerData = new Array(10).fill({
      id: 14723,
      name: 'Alexandra Athimas',
      utilizedHours: 128,
      nonUtilizedHours: 1234,
      totalWorkDays: 1234,
      totalWorkHours: 1234,
      efficiency: 1234,
    })

    this.timesheetManagerData = this.timesheetManagerData.map((data: any, index: number) => {
      return { ...data, ...{ index } }
    })
  }
}
