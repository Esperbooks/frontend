import { Component, OnInit } from '@angular/core';
import { ColumnProps, TableOptionsInterface } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-settle-transactions',
  templateUrl: './settle-transactions.component.html',
  styleUrls: ['./settle-transactions.component.scss']
})
export class SettleTransactionsComponent implements OnInit {
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
      title: 'Settle Transaction',
      clickAction: () => {
        console.log('Settle transactions')
      }
    },
    {
      title: 'Request Change',
      clickAction: () => {
        console.log('Request Change')
      }
    }
  ]

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
}
