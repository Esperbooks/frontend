import { Component } from '@angular/core';
import { ColumnProps, TableOptionsInterface } from '../../../components/table/table.component';

@Component({
  selector: 'eb-tax-settlements',
  templateUrl: './tax-settlements.component.html',
  styleUrls: ['./tax-settlements.component.scss']
})
export class TaxSettlementsComponent {
  projectOptions: string[] = ["Alphonse", "New Delhi"]

  summaryRows: any[] = [
    {
      wht: '4,980,412,456.78',
      vat: '2,098,012,345.00',
      tet: '1,098,012,345.25',
      cit: '1,245,225,090.24',
    }
  ]

  columnProps: ColumnProps[] = [
    {
      header: "WHT",
      prop: 'wht',
    },
    {
      header: "VAT",
      prop: 'vat',
    },
    {
      header: "TET",
      prop: 'tet'
    },
    {
      header: "CIT",
      prop: 'cit'
    },
  ]

  invoiceProps: ColumnProps[] = [
    {
      header: "Project ID",
      prop: 'projectId'
    },
    {
      header: "Invoice ID",
      prop: 'invoiceId'
    },
    {
      header: "Actual value",
      prop: 'actualValue'
    },
    {
      header: "Witholding Tax",
      prop: 'witholdingTax'
    },
    {
      header: "Status",
      prop: 'status'
    },
    {
      header: "Value Added Tax",
      prop: 'vat'
    },
  ]

  invoiceRows: any[] = new Array(10).fill({
    projectId: '2342423',
    invoiceId: 30,
    actualValue: 30,
    witholdingTax: 2034,
    status: "Settled",
    vat: '2425224',
  },)

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


}
