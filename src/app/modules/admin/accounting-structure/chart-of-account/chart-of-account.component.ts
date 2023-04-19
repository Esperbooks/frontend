import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps, TableOptionsInterface } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-chart-of-account',
  templateUrl: './chart-of-account.component.html',
  styleUrls: ['./chart-of-account.component.scss']
})
export class ChartOfAccountComponent implements OnInit {
  @ViewChild('settleTransactionTemplate') settleTransactionTemplate!: TemplateRef<any>;
  @ViewChild('requestChangeTemplate') requestChangeTemplate!: TemplateRef<any>;
  @ViewChild('newTransactionTemplate') newTransactionTemplate!: TemplateRef<any>;

  accountProps: ColumnProps[] = [
    {
      header: "Account ID",
      prop: 'accountId'
    },
    {
      header: "Description",
      prop: 'description'
    },
    {
      header: "Group",
      prop: 'group'
    }, {
      header: "Type",
      prop: 'type'
    },
    {
      header: "Amount",
      prop: 'amount'
    },
    {
      header: "Account Classification Description",
      prop: 'acd'
    },
    {
      header: "Journal Code",
      prop: 'journalCode'
    },
    {
      header: "Bank Code",
      prop: 'bankCode'
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
    this.accountRows = new Array(30).fill(
      {
        accountId: 3134923,
        description: "Samsung AS24UUP Split Air Conditioner",
        group: 10,
        type: 'Lorem',
        amount: '900,000.00',
        acd: 'Tangible Asset',
        journalCode: 'Nil',
        bankCode: 'Nil',
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
