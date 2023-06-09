import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

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
import { SharedModule } from '../../shared/shared.module';
import { NewProjectComponent } from './establish/new-project/new-project.component';
import { NewDeliverableComponent } from './specify/mdr-builder/new-deliverable/new-deliverable.component';
import { NewKanbanComponent } from './produce/kanban/new-kanban/new-kanban.component';


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
    ReleaseComponent,
    NewProjectComponent,
    NewDeliverableComponent,
    NewKanbanComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectManagementRoutingModule
  ],
  providers: [CurrencyPipe]
})
export class ProjectManagementModule { }
