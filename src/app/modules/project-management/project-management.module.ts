import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectManagementRoutingModule } from './project-management-routing.module';
import { EstablishComponent } from './establish/establish.component';
import { MdrBuilderComponent } from './specify/mdr-builder/mdr-builder.component';
import { ScheduleDeveloperComponent } from './specify/schedule-developer/schedule-developer.component';
import { ResourcePlannerComponent } from './specify/resource-planner/resource-planner.component';
import { CostEstimatorComponent } from './specify/cost-estimator/cost-estimator.component';
import { KanbanComponent } from './produce/kanban/kanban.component';
import { JobBoardComponent } from './produce/job-board/job-board.component';
import { DashboardComponent } from './evaluate/dashboard/dashboard.component';
import { ChangeManagementComponent } from './evaluate/change-management/change-management.component';
import { ReleaseComponent } from './release/release.component';


@NgModule({
  declarations: [
    EstablishComponent,
    MdrBuilderComponent,
    ScheduleDeveloperComponent,
    ResourcePlannerComponent,
    CostEstimatorComponent,
    KanbanComponent,
    JobBoardComponent,
    DashboardComponent,
    ChangeManagementComponent,
    ReleaseComponent
  ],
  imports: [
    CommonModule,
    ProjectManagementRoutingModule
  ]
})
export class ProjectManagementModule { }
