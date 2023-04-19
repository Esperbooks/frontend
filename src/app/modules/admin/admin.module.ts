import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BiodataComponent } from './biodata/biodata.component';
import { SoftwareAccessComponent } from './software-access/software-access.component';
import { RolesManagerComponent } from './roles-manager/roles-manager.component';
import { PayrollPlannerComponent } from './payroll-planner/payroll-planner.component';
import { ChartOfAccountComponent } from './accounting-structure/chart-of-account/chart-of-account.component';
import { CostCentreComponent } from './accounting-structure/cost-centre/cost-centre.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    BiodataComponent,
    SoftwareAccessComponent,
    RolesManagerComponent,
    PayrollPlannerComponent,
    ChartOfAccountComponent,
    CostCentreComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
