import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ColumnProps } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-change-management',
  templateUrl: './change-management.component.html',
  styleUrls: ['./change-management.component.scss']
})
export class ChangeManagementComponent implements OnInit {
  projectOptions: string[] = ["Alphonse", "New Delhi"]

  @ViewChild('addPurchaseOrderTemplate') addPurchaseOrderTemplate!: TemplateRef<any>;
  @ViewChild('paymentTermTemplate') paymentTermTemplate!: TemplateRef<any>;
  currentColumn!: any;

  supplierOptions = [
    "Mactech Ltd",
    "Postus Ltd",
  ]

  transactionProps: ColumnProps[] = [
    {
      header: "Change Log",
      prop: 'ChangeLog'
    },
    {
      header: "Description",
      prop: 'Description'
    },
    {
      header: "Status",
      prop: 'Status'
    },
    {
      header: "Comment",
      prop: 'Comment'
    },
    {
      header: "",
      prop: 'view',
      cssClass: 'underline text-eb-primary font-semibold cursor-pointer',
      clickAction: () => this.router.navigateByUrl('/project-management/produce/kanban/new-kanban')
    },
  ]

  transactionRows: any[] = []

  ngOnInit(): void {
    this.getTransactionRows();
  }

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {

  }

  getTransactionRows() {
    this.transactionRows = new Array(5).fill(
      {
        ChangeLog: "Cell Content 1",
        Description: "Some desription here",
        Status: "Approved",
        Comment: "Comment comment comment commen comment ",
        view: "View",
      }
    )
    this.transactionRows = this.transactionRows.map((x, i) => { return { ...x, ...{ index: i + 1 } } })
  }

  openDialog(templateRef: any, width = '500px'): void {
    const dialogRef = this.dialog.open(templateRef, {
      panelClass: 'eb-dialog-container',
      width,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result);
    });
  }
}
