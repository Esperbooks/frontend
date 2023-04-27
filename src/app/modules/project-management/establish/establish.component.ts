import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps, TableOptionsInterface } from '../../../components/table/table.component';

@Component({
  selector: 'eb-establish',
  templateUrl: './establish.component.html',
  styleUrls: ['./establish.component.scss']
})

export class EstablishComponent implements OnInit {
  @ViewChild('reviewTemplate') reviewTemplate!: TemplateRef<any>;
  currentColumn!: any;

  leaveRequestProps: ColumnProps[] = [
    {
      header: "S/N",
      prop: 'index'
    },
    {
      header: "Project ID",
      prop: 'projectId'
    }, {
      header: "Customer Name",
      prop: 'customerName'
    }, {
      header: "Project Title",
      prop: 'projectTitle'
    }, {
      header: "Project Manager",
      prop: 'projectManager'
    }, {
      header: "Sales Price",
      prop: 'salesPrice'
    },
    {
      header: "Budget Cost",
      prop: 'budgetCost'
    },
    {
      header: "Start Date",
      prop: 'startDate'
    },
    {
      header: "Finish Date",
      prop: 'finishDate'
    },
    {
      header: "% Complete",
      prop: 'percentComplete'
    },

  ]

  leaveRequestRows: any[] = []

  tableOptions: TableOptionsInterface[] = [
    {
      title: 'Edit Invoice',
      clickAction: () => {
        console.log('Edit Invoice')
      }
    },
    {
      title: 'Export Invoice',
      clickAction: () => {
        console.log('Export Invoice')
      }
    },
  ]

  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
    this.getLeaveRequestRows();
  }

  getLeaveRequestRows() {
    this.leaveRequestRows = new Array(6).fill({
      projectId: '0111293',
      customerName: "Alexandra Athimas",
      projectTitle: "Abuja Water Drain",
      projectManager: "Namenamename",
      budgetCost: "305,000.00",
      salesPrice: "450,000.00",
      startDate: "03-09-2022",
      finishDate: "03-10-2022",
      percentComplete: "95%",

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
