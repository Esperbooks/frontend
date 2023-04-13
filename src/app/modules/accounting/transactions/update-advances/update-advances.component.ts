import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps, TableOptionsInterface } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-update-advances',
  templateUrl: './update-advances.component.html',
  styleUrls: ['./update-advances.component.scss']
})
export class UpdateAdvancesComponent implements OnInit {
  @ViewChild('settleTransactionTemplate') settleTransactionTemplate!: TemplateRef<any>;
  @ViewChild('requestChangeTemplate') requestChangeTemplate!: TemplateRef<any>;
  @ViewChild('newTransactionTemplate') newTransactionTemplate!: TemplateRef<any>;

  transactionProps: ColumnProps[] = [
    {
      header: "TransactionID",
      prop: 'transactionId'
    },
    {
      header: "Description",
      prop: 'description'
    },
    {
      header: "Debit Ledger",
      prop: 'debitLedger'
    }, {
      header: "Credit Ledger",
      prop: 'creditLedger'
    },
    {
      header: "Amount",
      prop: 'amount'
    },
    {
      header: "Status",
      prop: 'status'
    },
  ]

  transactionRows: any[] = []

  tableOptions: TableOptionsInterface[] = [
    {
      title: 'Disburse Advance',
      clickAction: () => {
        this.openDialog(this.settleTransactionTemplate);
      }
    },
    {
      title: 'Review Advance',
      clickAction: () => {
        this.openDialog(this.requestChangeTemplate);
      }
    },
    {
      title: 'Close Advance',
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
    this.transactionRows = new Array(6).fill(
      {
        transactionId: 3134923,
        description: "Samsung AS24UUP Split Air Conditioner",
        debitLedger: 10,
        creditLedger: '450,000.00',
        amount: '900,000.00',
        status: 'Confirmed',
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
      console.log(result);
    });
  }
}
