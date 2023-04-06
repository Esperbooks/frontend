import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ButtonConfigInterface, ColumnProps } from '../../../components/table/table.component';
import { ebModal } from '../../../shared/modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'eb-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.scss']
})
export class LeaveRequestComponent implements OnInit {

  @ViewChild('withdrawTemplate') withdrawTemplate!: TemplateRef<any>;
  @ViewChild('addTemplate') addTemplate!: TemplateRef<any>;

  projectOptions: string[] = ["Alphonse", "New Delhi"]

  leaveRequestBtnConfig: ButtonConfigInterface[] = [
    {
      title: `+ Add New Request`,
      clickAction: () => {
        this.openDialog(this.addTemplate, '450px')
      }
    }
  ]
  summaryRows: any[] = [
    {
      annualLeave: "10/25 Days",
      compassionateLeave: "10/25 Days",
      paternityLeave: "10/25 Days",
      maternityLeave: "10/25 Days",
      sickLeave: "10/25 Days",
      workWithoutPay: "10/25 Days",
      total: "59/135 Days"
    }
  ]

  columnProps: ColumnProps[] = [
    {
      header: "Annual Leave",
      prop: 'annualLeave'
    },
    {
      header: "Compassionate Leave",
      prop: 'compassionateLeave'
    },
    {
      header: "Paternity Leave",
      prop: 'paternityLeave'
    },
    {
      header: "Maternity Leave",
      prop: 'maternityLeave'
    },
    {
      header: "Sick Leave",
      prop: 'sickLeave'
    },
    {
      header: "Work Without Pay",
      prop: 'workWithoutPay'
    },
    {
      header: "Taken/Total",
      prop: 'total'
    },
  ]

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
    }, {
      header: "Action",
      prop: 'action',
      cssClass: 'underline cursor-pointer',
      clickAction: (data: any) => {
        // const modalContent: HTMLElement | null = document.querySelector('#popup-modal');
        // console.log(modalContent)
        // const modal = ebModal(modalContent);
        // modal.show();
        this.openDialog(this.withdrawTemplate)
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
    this.leaveRequestRows = new Array(10).fill({
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

  openDialog(templateRef: any, width = '350px'): void {
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
