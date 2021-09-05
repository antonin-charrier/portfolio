import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CallCenterComponent } from './call-center/call-center.component';
import { EMonthlyComponent } from './e-monthly/e-monthly.component';
import { GaltComponent } from './galt/galt.component';
import { VisionSafetyComponent } from './vision-safety/vision-safety.component';
import { WebAgentComponent } from './web-agent/web-agent.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    CallCenterComponent,
    EMonthlyComponent,
    GaltComponent,
    VisionSafetyComponent,
    WebAgentComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
