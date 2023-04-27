import { Component } from '@angular/core';
import { ColumnProps } from '../../../../../components/table/table.component';

@Component({
  selector: 'eb-new-deliverable',
  templateUrl: './new-deliverable.component.html',
  styleUrls: ['./new-deliverable.component.scss']
})
export class NewDeliverableComponent {
  paymentMilestoneColumnProps: ColumnProps[] = [
    {
      header: 'Milestones',
      prop: 'milestones'
    },
    {
      header: 'Percentage',
      prop: 'percentage'
    },
    {
      header: 'Due Date',
      prop: 'dueDate'
    },
  ];

  paymentMilestoneRow: any[] = new Array(5).fill(
    {
      milestones: 'Mobilization',
      percentage: 'a',
      dueDate: 'a',
    }
  )
}
