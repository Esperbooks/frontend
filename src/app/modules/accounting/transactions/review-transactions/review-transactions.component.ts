import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps } from '../../../../components/table/table.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'eb-review-transactions',
  templateUrl: './review-transactions.component.html',
  styleUrls: ['./review-transactions.component.scss'],
  providers: [CurrencyPipe]
})
export class ReviewTransactionsComponent implements OnInit {
  @ViewChild('addPurchaseOrderTemplate') addPurchaseOrderTemplate!: TemplateRef<any>;
  @ViewChild('paymentTermTemplate') paymentTermTemplate!: TemplateRef<any>;
  currentColumn!: any;

  supplierOptions = [
    "Mactech Ltd",
    "Postus Ltd",
  ]

  transactionProps: ColumnProps[] = [
    {
      header: "Item",
      prop: 'item'
    },
    {
      header: "Description",
      prop: 'description'
    },
    {
      header: "Quantity",
      prop: 'quantity'
    }, {
      header: "Unit Price",
      prop: 'unitPrice'
    },
    {
      header: "Tax",
      prop: 'tax'
    },
    {
      header: "Amount",
      prop: 'amount'
    },
    {
      header: "Currency",
      prop: 'currency'
    },
    {
      header: "Payment Term",
      prop: 'paymentTerm',
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
        item: 'Air Conditioner',
        description: "Samsung AS24UUP Split Air Conditioner",
        quantity: 10,
        unitPrice: '450,000.00',
        tax: '4500',
        amount: '900,000.00',
        currency: 'Naira',
        paymentTerm: 'View Payment Term'
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
