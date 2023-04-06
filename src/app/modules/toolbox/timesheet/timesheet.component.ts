import { Component } from '@angular/core';
import { ColumnProps } from '../../../components/table/table.component';

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

  columnProps: ColumnProps[] = [
    {
      header: "Total Utilized Hrs",
      prop: 'totalUtilizedHours'
    },
    {
      header: "Total Non Utilized Hrs",
      prop: 'totalUtilizedHours'
    },
    {
      header: "% Utilized Hrs",
      prop: 'totalUtilizedHours'
    },
    {
      header: "% Non Utilized Hrs",
      prop: 'totalUtilizedHours'
    },
    {
      header: "No of Workdays Within Period",
      prop: 'totalUtilizedHours'
    },
    {
      header: "Total Work Hrs Within Period",
      prop: 'totalUtilizedHours'
    },
    {
      header: "Utilization",
      prop: 'totalUtilizedHours'
    },
  ]

  timesheetProps: ColumnProps[] = [
    {
      header: "Activity Type",
      prop: 'activityType'
    },
    {
      header: "Project Number",
      prop: 'projectNumber'
    },
    {
      header: "MDR Number",
      prop: 'mdrNumber'
    },
    {
      header: "Activity Code",
      prop: 'activityCode'
    },
    {
      header: "Sub - Activity Code",
      prop: 'subActivityCode'
    },
    {
      header: "Description",
      prop: 'description'
    },
  ]

  timesheetRows: any[] = [
    {
      activityType: 'Follow up on project progress',
      projectNumber: 30,
      mdrNumber: 30,
      activityCode: 2034,
      subActivityCode: 10421,
      description: 'Scheduling meeting with stakeholders'
    },
    {
      activityType: 'Follow up on project progress',
      projectNumber: 30,
      mdrNumber: 30,
      activityCode: 2034,
      subActivityCode: 10421,
      description: 'Following up on deliverables from subsidiary companies'
    },
    {
      activityType: 'Follow up on project progress',
      projectNumber: 30,
      mdrNumber: 30,
      activityCode: 2034,
      subActivityCode: 10421,
      description: 'Following up on deliverables from subsidiary companies '
    },
  ]


}
