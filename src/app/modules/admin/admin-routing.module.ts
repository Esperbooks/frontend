import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiodataComponent } from './biodata/biodata.component';
import { SoftwareAccessComponent } from './software-access/software-access.component';
import { RolesManagerComponent } from './roles-manager/roles-manager.component';
import { PayrollPlannerComponent } from './payroll-planner/payroll-planner.component';
import { ChartOfAccountComponent } from './accounting-structure/chart-of-account/chart-of-account.component';
import { CostCentreComponent } from './accounting-structure/cost-centre/cost-centre.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'biodata',
    pathMatch: 'full'
  },
  {
    path: 'biodata',
    component: BiodataComponent
  },
  {
    path: 'software-access',
    component: SoftwareAccessComponent
  },
  {
    path: 'roles-manager',
    component: RolesManagerComponent
  },
  {
    path: 'payroll-planner',
    component: PayrollPlannerComponent
  },
  {
    path: 'accounting-structure',
    children: [
      {
        path: 'chart-of-account',
        component: ChartOfAccountComponent
      },
      {
        path: 'cost-centre',
        component: CostCentreComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
