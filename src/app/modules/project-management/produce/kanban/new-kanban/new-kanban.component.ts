import { Component } from '@angular/core';
import { ColumnProps } from '../../../../../components/table/table.component';

@Component({
  selector: 'eb-new-kanban',
  templateUrl: './new-kanban.component.html',
  styleUrls: ['./new-kanban.component.scss']
})
export class NewKanbanComponent {
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
