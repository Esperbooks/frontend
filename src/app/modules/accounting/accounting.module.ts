import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { ReviewTransactionsComponent } from './transactions/review-transactions/review-transactions.component';
import { SettleTransactionsComponent } from './transactions/settle-transactions/settle-transactions.component';
import { DisburseAdvancesComponent } from './transactions/disburse-advances/disburse-advances.component';
import { UpdateAdvancesComponent } from './transactions/update-advances/update-advances.component';
import { PayrollComponent } from './payroll/payroll.component';
import { RevenueComponent } from './revenue/revenue.component';
import { TaxSettlementsComponent } from './tax-settlements/tax-settlements.component';
import { NewAssetsComponent } from './assets/new-assets/new-assets.component';
import { AssetRegisterComponent } from './assets/asset-register/asset-register.component';
import { AssetJournalSummaryComponent } from './assets/asset-journal-summary/asset-journal-summary.component';
import { AssemblyComponent } from './assembly/assembly.component';
import { ReportsComponent } from './reports/reports.component';
import { InventoryManagementComponent } from './assembly/inventory-management/inventory-management.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ReviewTransactionsComponent,
    SettleTransactionsComponent,
    DisburseAdvancesComponent,
    UpdateAdvancesComponent,
    PayrollComponent,
    RevenueComponent,
    TaxSettlementsComponent,
    NewAssetsComponent,
    AssetRegisterComponent,
    AssetJournalSummaryComponent,
    AssemblyComponent,
    ReportsComponent,
    InventoryManagementComponent
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    SharedModule
  ]
})
export class AccountingModule { }
