import { Component } from '@angular/core';

@Component({
  selector: 'eb-software-access',
  templateUrl: './software-access.component.html',
  styleUrls: ['./software-access.component.scss']
})
export class SoftwareAccessComponent {
  checkBoxOptions = [
    {
      title: 'Toolbox',
      options: [
        {
          name: 'Time Sheet',
          checked: true
        },
        {
          name: 'Expense',
          checked: true
        },
        {
          name: 'Leave Request',
          checked: false
        },
        {
          name: 'To Do List',
          checked: false
        },
        {
          name: 'Raise Requisitions',
          checked: false
        },
        {
          name: 'Salary Advance',
          checked: false
        },
        {
          name: 'My Data',
          checked: false
        },
      ]
    },
    {
      title: 'Project Management',
      options: [
        {
          name: 'Establish',
          checked: false
        },
        {
          name: 'Specify',
          checked: false
        },
        {
          name: 'Produce',
          checked: false
        },
        {
          name: 'To Do List',
          checked: false
        },
        {
          name: 'Evaluate',
          checked: false
        },
        {
          name: 'Release',
          checked: false
        },
      ]
    },
    {
      title: 'Accounting',
      options: [
        {
          name: 'Quotations',
          checked: false
        },
        {
          name: 'Production Assembly',
          checked: false
        },
        {
          name: 'Asset Requisitions',
          checked: false
        },
        {
          name: 'Purchace Orders',
          checked: false
        },
        {
          name: 'Payroll Admin',
          checked: false
        },
        {
          name: 'Settle Requisitions',
          checked: false
        },
        {
          name: 'Invoice',
          checked: false
        },

      ]
    },
    {
      title: 'Admin',
      options: [
        {
          name: 'Admin Toolbox',
          checked: false
        },
        {
          name: 'Approve Requisitions',
          checked: false
        },
        {
          name: 'Leave Manager',
          checked: false
        },
      ]
    }
  ]
}
