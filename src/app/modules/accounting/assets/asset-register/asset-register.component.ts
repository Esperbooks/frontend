import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-asset-register',
  templateUrl: './asset-register.component.html',
  styleUrls: ['./asset-register.component.scss']
})
export class AssetRegisterComponent implements OnInit {
  @ViewChild('settleTransactionTemplate') settleTransactionTemplate!: TemplateRef<any>;
  @ViewChild('requestChangeTemplate') requestChangeTemplate!: TemplateRef<any>;
  @ViewChild('newTransactionTemplate') newTransactionTemplate!: TemplateRef<any>;

  payrollProps: ColumnProps[] = [
    {
      header: "Asset Number",
      prop: 'index'
    },
    {
      header: "Asset ID Number",
      prop: 'employee1'
    },
    {
      header: "Description",
      prop: 'employee2'
    },
    {
      header: "Asset Type",
      prop: 'employee3'
    },
    {
      header: "Category",
      prop: 'employee4'
    },
    {
      header: "Tax Code",
      prop: 'employee5'
    },
    {
      header: "Error Code",
      prop: 'employee6'
    },
    {
      header: "Class",
      prop: 'employee7'
    },
    {
      header: "",
      prop: 'viewmore',
      cssClass: 'underline text-eb-primary'
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
        index: 'LB-001',
        employee1: "99843812",
        employee2: "Factory Land & Buildings",
        employee3: "Owned",
        employee4: "LBU01",
        employee5: "J",
        employee6: "Nil",
        employee7: "LB",
        viewmore: "View More",
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
