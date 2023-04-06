import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps } from '../../../components/table/table.component';

@Component({
  selector: 'eb-requisitions',
  templateUrl: './requisitions.component.html',
  styleUrls: ['./requisitions.component.scss']
})
export class RequisitionsComponent implements OnInit {
  @ViewChild('reviewTemplate') reviewTemplate!: TemplateRef<any>;
  currentColumn!: any;

  leaveRequestProps: ColumnProps[] = [
    {
      header: "S/N",
      prop: 'index'
    },
    {
      header: "Leave ID",
      prop: 'leaveId'
    }, {
      header: "Applicant Name",
      prop: 'applicantName'
    }, {
      header: "Leave Type",
      prop: 'leaveType'
    }, {
      header: "Start Date",
      prop: 'startDate'
    }, {
      header: "End Date",
      prop: 'endDate'
    }, {
      header: "Status",
      prop: 'status',
      cssMethod: (propData) => {
        let result;
        propData = propData?.toLowerCase();
        switch (propData) {
          case 'submitted':
            result = `text-eb-danger py-1.5  cursor-pointer px-2 rounded-lg bg-eb-danger-1`
            break;

          case 'approved':
            result = `text-green-800 py-1.5  cursor-pointer px-2 rounded-lg bg-green-50`
            break;

          default:
            result = ''
            break;
        }
        return result;
      }
    },

  ]

  leaveRequestRows: any[] = []

  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.getLeaveRequestRows();
  }

  getLeaveRequestRows() {
    this.leaveRequestRows = new Array(6).fill({
      leaveId: '0111293',
      applicantName: "Alexandra Athimas",
      leaveType: "Annual",
      startDate: "31/10/2022",
      endDate: "14/11/2022",
      status: "Approved",
      action: "Withdraw",
    },)
    this.leaveRequestRows = this.leaveRequestRows.map((data: any, index: number) => {
      return { ...data, ...{ index: index + 1 } }
    })
  }

  newRequisition() {
    this.openDialog(this.reviewTemplate)
  }

  openDialog(templateRef: any, width = '500px'): void {
    const dialogRef = this.dialog.open(templateRef, {
      panelClass: 'eb-dialog-container',
      width,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
