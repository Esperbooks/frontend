import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ColumnProps } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent implements OnInit {
  projectOptions: string[] = ["Alphonse", "New Delhi"]

  @ViewChild('addPurchaseOrderTemplate') addPurchaseOrderTemplate!: TemplateRef<any>;
  @ViewChild('paymentTermTemplate') paymentTermTemplate!: TemplateRef<any>;
  currentColumn!: any;

  supplierOptions = [
    "Mactech Ltd",
    "Postus Ltd",
  ]

  transactionProps: ColumnProps[] = [
    {
      header: "Activity ID",
      prop: 'ActivityID',
      cssClass: 'underline text-eb-primary font-semibold cursor-pointer',
      clickAction: () => this.router.navigateByUrl('/project-management/produce/kanban/new-kanban')
    },
    {
      header: "Activity Name",
      prop: 'ActivityName'
    },
    {
      header: "Planned Start",
      prop: 'PlannedStart'
    },
    {
      header: "Planned End",
      prop: 'PlannedEnd'
    },
    {
      header: "Hours",
      prop: 'Hours'
    },
    {
      header: "Priority",
      prop: 'Priority'
    },
    {
      header: "Phase",
      prop: 'Phase'
    },
    {
      header: "Traffic Lights",
      prop: 'TrafficLights',
      html: true
    },
    {
      header: "Resource",
      prop: 'Resource'
    },
  ]

  transactionRows: any[] = []

  ngOnInit(): void {
    this.getTransactionRows();
  }

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {

  }

  getTransactionRows() {
    this.transactionRows = new Array(10).fill(
      {
        ActivityID: "xxxxx-100",
        ActivityName: "Cell Content 1",
        PlannedStart: "12/10/2022",
        PlannedEnd: "12/01/2023",
        Hours: "4",
        Priority: "Critical High",
        Phase: "Nil",
        TrafficLights: `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#20367F"/>
        </svg>
        `,
        Resource: "Nil",
      }
    )
    this.transactionRows = this.transactionRows.map((x, i) => { return { ...x, ...{ index: i + 1 } } })
  }

  openDialog(templateRef: any, width = '500px'): void {
    const dialogRef = this.dialog.open(templateRef, {
      panelClass: 'eb-dialog-container',
      width,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }
}
