import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColumnProps } from '../../../../components/table/table.component';

@Component({
  selector: 'eb-cost-estimator',
  templateUrl: './cost-estimator.component.html',
  styleUrls: ['./cost-estimator.component.scss']
})
export class CostEstimatorComponent implements OnInit {
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
      header: "Resource Type",
      prop: 'ResourceType'
    },
    {
      header: "Resource Name",
      prop: 'ResourceName'
    },
    {
      header: "Maximum Hours",
      prop: 'MaximumHours'
    }, {
      header: "Std Rate",
      prop: 'StdRate'
    },
    {
      header: "Ovt Rate",
      prop: 'OvtRate'
    },
    {
      header: "Cost/Use",
      prop: 'CostUse'
    },
    {
      header: "Accrue",
      prop: 'Accrue'
    },
    {
      header: "Quantity",
      prop: 'Quantity'
    },
    {
      header: "",
      prop: 'view',
      html: true
    },
  ]

  transactionRows: any[] = []

  constructor(
    private dialog: MatDialog,
  ) {

  }

  ngOnInit(): void {
    this.getTransactionRows();
  }

  getTransactionRows() {
    this.transactionRows = new Array(3).fill(
      {
        ResourceType: "Work",
        ResourceName: "Adesina Adedotun",
        MaximumHours: "4.00",
        StdRate: "2000.00",
        OvtRate: "3,000.00",
        CostUse: "5,000.00",
        Accrue: "Porated",
        Quantity: "Porated",
        view: `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.2612 2.4375C14.1363 2.43747 14.9774 2.77643 15.6079 3.38324C16.2384 3.99005 16.6093 4.81751 16.6428 5.69194L16.6451 5.82142H20.9118C21.1 5.82202 21.2808 5.89471 21.417 6.02452C21.5532 6.15434 21.6345 6.33141 21.6441 6.51933C21.6538 6.70724 21.591 6.89171 21.4688 7.03479C21.3466 7.17787 21.1743 7.26869 20.9871 7.28856L20.9118 7.29268H20.2698L19.2675 20.5753C19.22 21.2043 18.9367 21.7921 18.4742 22.2209C18.0117 22.6498 17.4042 22.8881 16.7734 22.8881H9.74902C9.11826 22.8881 8.51079 22.6498 8.04829 22.2209C7.58579 21.7921 7.30241 21.2043 7.25492 20.5753L6.25211 7.29268H5.61063C5.42852 7.29277 5.25284 7.22529 5.1176 7.10332C4.98237 6.98134 4.89718 6.81354 4.87853 6.63238L4.875 6.55705C4.875 6.17629 5.16455 5.86261 5.5353 5.82554L5.61063 5.82142H9.87731C9.87731 4.92395 10.2338 4.06323 10.8684 3.42863C11.503 2.79402 12.3638 2.4375 13.2612 2.4375ZM18.7944 7.29268H7.72808L8.72266 20.4647C8.74224 20.7235 8.85885 20.9654 9.04916 21.142C9.23946 21.3185 9.48942 21.4167 9.74902 21.4169H16.7734C17.0331 21.4169 17.2832 21.3187 17.4737 21.1422C17.6641 20.9656 17.7808 20.7236 17.8004 20.4647L18.795 7.29268H18.7944ZM15.1739 10.3823C15.5546 10.3823 15.8683 10.6719 15.906 11.0427L15.9095 11.118V17.5916C15.9104 17.7807 15.8384 17.963 15.7084 18.1004C15.5784 18.2379 15.4005 18.3199 15.2116 18.3296C15.0227 18.3393 14.8373 18.2759 14.6939 18.1525C14.5506 18.029 14.4603 17.8551 14.4418 17.6669L14.4382 17.5916V11.118C14.4382 10.7119 14.7678 10.3823 15.1739 10.3823ZM11.3486 10.3823C11.7293 10.3823 12.043 10.6719 12.0807 11.0427L12.0842 11.118V17.5916C12.0851 17.7807 12.0131 17.963 11.8831 18.1004C11.7531 18.2379 11.5752 18.3199 11.3863 18.3296C11.1974 18.3393 11.012 18.2759 10.8686 18.1525C10.7253 18.029 10.635 17.8551 10.6165 17.6669L10.6129 17.5916V11.118C10.6129 10.7119 10.9425 10.3823 11.3486 10.3823ZM13.2612 3.90877C12.7727 3.90874 12.3026 4.09565 11.9475 4.43117C11.5924 4.76669 11.3792 5.22537 11.3515 5.71313L11.3486 5.82142H15.1739C15.1739 5.31415 14.9724 4.82766 14.6137 4.46897C14.255 4.11028 13.7685 3.90877 13.2612 3.90877Z" fill="#E5761A"/>
        </svg>
        `
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
