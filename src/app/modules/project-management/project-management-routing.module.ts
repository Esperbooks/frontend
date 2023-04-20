import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishComponent } from './establish/establish.component';
import { MdrBuilderComponent } from './specify/mdr-builder/mdr-builder.component';
import { ScheduleDeveloperComponent } from './specify/schedule-developer/schedule-developer.component';
import { ResourcePlannerComponent } from './specify/resource-planner/resource-planner.component';
import { CostEstimatorComponent } from './specify/cost-estimator/cost-estimator.component';
import { JobBoardComponent } from './produce/job-board/job-board.component';
import { KanbanComponent } from './produce/kanban/kanban.component';
import { ChangeManagementComponent } from './evaluate/change-management/change-management.component';
import { DashboardComponent } from './evaluate/dashboard/dashboard.component';
import { ReleaseComponent } from './release/release.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'establish',
    pathMatch: 'full'
  },
  {
    path: 'establish',
    component: EstablishComponent
  },
  {
    path: 'specify',
    children: [
      {
        path: 'mdr-builder',
        component: MdrBuilderComponent
      },
      {
        path: 'schedule-developer',
        component: ScheduleDeveloperComponent
      },
      {
        path: 'resource-planner',
        component: ResourcePlannerComponent
      },
      {
        path: 'cost-estimator',
        component: CostEstimatorComponent
      },
    ]
  },
  {
    path: 'produce',
    children: [
      {
        path: 'job-board',
        component: JobBoardComponent
      },
      {
        path: 'kanban',
        component: KanbanComponent
      }
    ]
  },
  {
    path: 'evaluate',
    children: [
      {
        path: 'change-management',
        component: ChangeManagementComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  },
  {
    path: 'release',
    component: ReleaseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule { }
