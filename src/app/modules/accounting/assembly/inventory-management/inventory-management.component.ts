import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.scss']
})
export class InventoryManagementComponent implements OnInit {
  @ViewChild('settleTransactionTemplate') settleTransactionTemplate!: TemplateRef<any>;
  @ViewChild('requestChangeTemplate') requestChangeTemplate!: TemplateRef<any>;
  @ViewChild('newTransactionTemplate') newTransactionTemplate!: TemplateRef<any>;

  payrollProps: ColumnProps[] = [
    {
      header: "Material ID",
      prop: 'index'
    },
    {
      header: "Material Name",
      prop: 'employee1'
    },
    {
      header: "Description",
      prop: 'employee2'
    },
    {
      header: "Unit",
      prop: 'employee3'
    },
    {
      header: "Quantity In Stock",
      prop: 'employee4'
    },
    {
      header: "Unit Price/Rate",
      prop: 'employee5'
    },
    {
      header: "Inventory Price",
      prop: 'employee6'
    },
    {
      header: "",
      prop: 'employee7',
      cssClass: 'underline cursor-pointer text-eb-primary'
    },
  ]

  payrollRows: any[] = []

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getTransactionRows();
  }

  getTransactionRows() {
    this.payrollRows = new Array(10).fill(
      {
        index: '0101010101',
        employee1: "Pet Bottles",
        employee2: "narationnarationnarationnaration",
        employee3: "Bundles",
        employee4: "1,000",
        employee5: "1,000.00",
        employee6: "470,000.00",
        employee7: "View More",
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
