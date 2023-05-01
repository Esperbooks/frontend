import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-schedule-developer',
  templateUrl: './schedule-developer.component.html',
  styleUrls: ['./schedule-developer.component.scss']
})
export class ScheduleDeveloperComponent implements OnInit {
  projectOptions: string[] = ["Alphonse", "New Delhi"]

  ganttChartMode = false;

  @ViewChild('addPurchaseOrderTemplate') addPurchaseOrderTemplate!: TemplateRef<any>;
  @ViewChild('paymentTermTemplate') paymentTermTemplate!: TemplateRef<any>;
  currentColumn!: any;

  supplierOptions = [
    "Mactech Ltd",
    "Postus Ltd",
  ]

  transactionProps: ColumnProps[] = [
    {
      header: "S/N",
      prop: 'index'
    },
    {
      header: "Deliverable ID",
      prop: 'DeliverableID'
    },
    {
      header: "Deliverable Title",
      prop: 'DeliverableTitle'
    },
    {
      header: "Type",
      prop: 'Type'
    }, {
      header: "Service Level",
      prop: 'ServiceLevel'
    },
    {
      header: "Max Hours Approved",
      prop: 'MaxHoursApproved'
    },
    {
      header: "Team",
      prop: 'Team'
    },
    {
      header: "",
      prop: 'view',
      cssClass: 'underline text-eb-primary cursor-pointer',
      clickAction: () => {
        this.openDialog(this.paymentTermTemplate, '300px')
      }
    },
  ]

  transactionRows: any[] = []

  constructor(
    private dialog: MatDialog,
    private currencyPipe: CurrencyPipe
  ) {

  }

  ngOnInit(): void {
    this.getTransactionRows();
  }

  getTransactionRows() {
    this.transactionRows = new Array(6).fill(
      {
        DeliverableID: "1720-P&ID-001",
        DeliverableTitle: "Water Savings",
        Type: "P&ID/PDF/BFD",
        ServiceLevel: "2",
        MaxHoursApproved: "16",
        Team: "Nil",
        view: "View & Edit Project",
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

  toggleViewMode() {
    this.ganttChartMode = !this.ganttChartMode
  }
}
