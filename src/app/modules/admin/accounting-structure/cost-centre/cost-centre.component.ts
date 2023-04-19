import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps, TableOptionsInterface } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-cost-centre',
  templateUrl: './cost-centre.component.html',
  styleUrls: ['./cost-centre.component.scss']
})
export class CostCentreComponent implements OnInit {
  @ViewChild('settleTransactionTemplate') settleTransactionTemplate!: TemplateRef<any>;
  @ViewChild('requestChangeTemplate') requestChangeTemplate!: TemplateRef<any>;
  @ViewChild('newTransactionTemplate') newTransactionTemplate!: TemplateRef<any>;

  accountProps: ColumnProps[] = [
    {
      header: "Cost Centre ID",
      prop: 'costCentreID'
    },
    {
      header: "Description",
      prop: 'description'
    },
    {
      header: "Company Type",
      prop: 'companyType'
    },
  ]

  accountRows: any[] = []

  tableOptions: TableOptionsInterface[] = [
    {
      title: 'Settle Transaction',
      clickAction: () => {
        this.openDialog(this.settleTransactionTemplate);
      }
    },
    {
      title: 'Request Change',
      clickAction: () => {
        this.openDialog(this.requestChangeTemplate);
      }
    }
  ]

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getTransactionRows();
  }

  getTransactionRows() {
    this.accountRows = new Array(10).fill(
      {
        costCentreID: 3134923,
        description: "Samsung AS24UUP Split Air Conditioner",
        companyType: 10,
      }
    )
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
