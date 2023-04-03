import { Component } from '@angular/core';
import { ColumnMode, TableColumn } from '@swimlane/ngx-datatable';

@Component({
  selector: 'eb-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent {
  projectOptions: string[] = ["Alphonse", "New Delhi"]

  summaryRows: any[] = [
    {
      totalUtilizedHours: 30,
      totalNonUtilizedHours: 30,
      percentUtilizedHours: 20,
      percentNonUtilizedHours: 20,
      noOfWorkingDaysInPerios: 29,
      totalWorkHours: 12,
      utlization: "Utilization"
    }
  ]

  // summaryColumns: TableColumn[] = [
  //   "Total Utilized Hrs",
  //   "Total Non Utilized Hrs",
  //   "% Utilized Hrs",
  //   "% Non Utilized Hrs",
  //   "No of Workdays Within Period",
  //   "Total Work Hrs Within Period",
  //   "Utilization",
  // ]

  ColumnMode = ColumnMode;

}
