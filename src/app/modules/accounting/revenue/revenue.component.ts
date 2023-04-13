import { Component } from '@angular/core';
import { ColumnProps, TableOptionsInterface } from '../../../components/table/table.component';

@Component({
  selector: 'eb-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent {
  projectOptions: string[] = ["Alphonse", "New Delhi"]

  summaryRows: any[] = [
    {
      received: '4,980,412,456.78',
      overdue: '2,098,012,345.00',
      invoiced: '1,098,012,345.25',
      notDue: '1,245,225,090.24',
      pipeline: '5,500,345.98'
    }
  ]

  columnProps: ColumnProps[] = [
    {
      header: "Received",
      prop: 'received',
      cssClass: 'text-green-600'
    },
    {
      header: "Overdue",
      prop: 'overdue',
      cssClass: 'text-red-600'
    },
    {
      header: "Invoiced, Not Received",
      prop: 'invoiced'
    },
    {
      header: "Not Due",
      prop: 'notDue'
    },
    {
      header: "Pipeline",
      prop: 'pipeline'
    },
  ]

  invoiceProps: ColumnProps[] = [
    {
      header: "Project ID & Name",
      prop: 'projectId'
    },
    {
      header: "Milestone",
      prop: 'milestone'
    },
    {
      header: "Invoice No",
      prop: 'invoiceNo'
    },
    {
      header: "%",
      prop: 'percentage'
    },
    {
      header: "Estimated Amount",
      prop: 'estimatedAmount'
    },
    {
      header: "Actual Amount",
      prop: 'actualAmount'
    },
    {
      header: "Due Date",
      prop: 'dueDate'
    },
    {
      header: "Status",
      prop: 'status'
    },
  ]

  invoiceRows: any[] = new Array(3).fill({
    projectId: 'Follow up on project progress',
    milestone: 30,
    invoiceNo: 30,
    percentage: 2034,
    estimatedAmount: 10421,
    actualAmount: 'Scheduling meeting with stakeholders',
    dueDate: 'Scheduling meeting with stakeholders',
    status: 'Scheduling meeting with stakeholders',
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

