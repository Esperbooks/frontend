import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps, } from '../../../components/table/table.component';

@Component({
  selector: 'eb-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {
  @ViewChild('settleTransactionTemplate') settleTransactionTemplate!: TemplateRef<any>;
  @ViewChild('requestChangeTemplate') requestChangeTemplate!: TemplateRef<any>;
  @ViewChild('newTransactionTemplate') newTransactionTemplate!: TemplateRef<any>;

  payrollProps: ColumnProps[] = [
    {
      header: "Index",
      prop: 'index'
    },
    {
      header: "Employee1",
      prop: 'employee1'
    },
    {
      header: "Employee2",
      prop: 'employee2'
    },
    {
      header: "Employee3",
      prop: 'employee3'
    },
    {
      header: "Employee4",
      prop: 'employee4'
    },
    {
      header: "Employee5",
      prop: 'employee5'
    },
    {
      header: "Employee6",
      prop: 'employee6'
    },
    {
      header: "Employee7",
      prop: 'employee7'
    },
    {
      header: "Employee8",
      prop: 'employee8'
    },
    {
      header: "Employee9",
      prop: 'employee9'
    },
  ]

  payrollRows: any[] = []

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getTransactionRows();
  }

  getTransactionRows() {
    this.payrollRows = new Array(50).fill(
      {
        index: 'Employee Name',
        employee1: "Sola Allison",
        employee2: "Sola Allison",
        employee3: "Sola Allison",
        employee4: "Sola Allison",
        employee5: "Sola Allison",
        employee6: "Sola Allison",
        employee7: "Sola Allison",
        employee8: "Sola Allison",
        employee9: "Sola Allison",
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
