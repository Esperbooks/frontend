import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewTransactionsComponent } from './transactions/review-transactions/review-transactions.component';
import { SettleTransactionsComponent } from './transactions/settle-transactions/settle-transactions.component';
import { DisburseAdvancesComponent } from './transactions/disburse-advances/disburse-advances.component';
import { UpdateAdvancesComponent } from './transactions/update-advances/update-advances.component';
import { PayrollComponent } from './payroll/payroll.component';
import { RevenueComponent } from './revenue/revenue.component';
import { TaxSettlementsComponent } from './tax-settlements/tax-settlements.component';
import { NewAssetsComponent } from './assets/new-assets/new-assets.component';
import { InventoryManagementComponent } from './assembly/inventory-management/inventory-management.component';
import { ReportsComponent } from './reports/reports.component';
import { AssetRegisterComponent } from './assets/asset-register/asset-register.component';
import { AssetJournalSummaryComponent } from './assets/asset-journal-summary/asset-journal-summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'transactions/review-transactions',
    pathMatch: 'full'
  },
  {
    path: 'transactions',
    children: [
      {
        path: 'review-transactions',
        component: ReviewTransactionsComponent
      },
      {
        path: 'settle-transactions',
        component: SettleTransactionsComponent
      },
      {
        path: 'disburse-advances',
        component: DisburseAdvancesComponent
      },
      {
        path: 'update-advances',
        component: UpdateAdvancesComponent
      },
    ],
  },
  {
    path: 'payroll',
    component: PayrollComponent
  },
  {
    path: 'revenue',
    component: RevenueComponent
  },
  {
    path: 'tax-settlements',
    component: TaxSettlementsComponent
  },
  {
    path: 'assets',
    children: [
      {
        path: 'new-assets',
        component: NewAssetsComponent
      },
      {
        path: 'asset-register',
        component: AssetRegisterComponent
      },
      {
        path: 'asset-journal-summary',
        component: AssetJournalSummaryComponent
      },
    ]
  },
  {
    path: 'assembly',
    children: [
      {
        path: 'inventory-management',
        component: InventoryManagementComponent
      }
    ]
  },
  {
    path: 'reports',
    component: ReportsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
