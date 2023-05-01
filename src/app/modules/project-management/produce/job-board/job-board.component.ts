import { Component, OnInit } from '@angular/core';
import { ColumnProps } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.scss']
})
export class JobBoardComponent {
  projectOptions: string[] = ["Alphonse", "New Delhi"]

  supplierOptions = [
    "Mactech Ltd",
    "Postus Ltd",
  ]

  tableColumnProps: ColumnProps[] = [
    {
      header: 'Not Started',
      prop: 'notStarted'
    },
    {
      header: 'In Progress',
      prop: 'inProgress'
    },
    {
      header: 'In-House Review',
      prop: 'inHouseReview'
    },
    {
      header: 'Customer Review',
      prop: 'customerReview'
    },
    {
      header: 'Completed',
      prop: 'completed'
    }
  ];

  tableData: any[] = new Array(3).fill({
    notStarted: {
      file: null,
      reviewer: 'Festus Williams',
      checked: false
    },
    inProgress: {
      file: null,
      reviewer: 'Festus Williams',
      checked: false
    },
    inHouseReview: {
      file: null,
      reviewer: 'Festus Williams',
      checked: false
    },
    customerReview: {
      file: null,
      reviewer: 'Festus Williams',
      checked: false
    },
    completed: {
      file: null,
      reviewer: 'Festus Williams',
      checked: false
    },
  })

  selectAllColumn(prop: string) {
    const isAllChecked = this.tableData.every(x => x[prop].checked === true);
    this.tableData.forEach(data => {
      data[prop].checked = !isAllChecked;
    })
  }

  selectColumn(prop: string, index: number) {
    this.tableData[index][prop].checked = !this.tableData[index][prop].checked;
  }

  isAllColumnChecked(prop: string) {
    const propData = this.tableData.map(x => x[prop]);
    return propData.every(data => data.checked === true);
  }
}
