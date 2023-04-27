import { Component } from '@angular/core';
import { ColumnProps } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  financialTableProps: ColumnProps[] = [
    {
      header: '',
      prop: 'header'
    },
    {
      header: 'Travel & Allowance',
      prop: 'TravelAllowance'
    },
    {
      header: 'Total ManHours',
      prop: 'TotalManHours'
    },
    {
      header: 'Bill on Hours ',
      prop: 'BillonHours'
    },
    {
      header: 'Total Costs',
      prop: 'TotalCosts'
    },
    {
      header: 'Total Sales Price',
      prop: 'TotalSalesPrice'
    },
    {
      header: 'Margin',
      prop: 'Margin'
    },
  ]

  financialTablwRow: any[] = [
    {
      header: "Estimated",
      TravelAllowance: "450,000",
      TotalManHours: "450,000",
      BillonHours: "450,000",
      TotalCosts: "450,000",
      TotalSalesPrice: "450,000",
      Margin: "450,000",
    },
    {
      header: "Actual",
      TravelAllowance: "450,000",
      TotalManHours: "450,000",
      BillonHours: "450,000",
      TotalCosts: "450,000",
      TotalSalesPrice: "450,000",
      Margin: "450,000",
    },
  ]

  paymentMilestonesTableProps: ColumnProps[] = [
    {
      header: 'Milestones',
      prop: 'Milestones'
    },
    {
      header: 'Percentage',
      prop: 'Percentage'
    },
    {
      header: 'Due Date',
      prop: 'DueDate'
    },
    {
      header: 'Payment Date',
      prop: 'PaymentDate'
    },

  ]

  paymentMilestonesTablwRow: any[] = new Array(4).fill({
    Milestones: "Estimated",
    Percentage: "450,000",
    DueDate: "450,000",
    PaymentDate: "450,000",
  })
}
