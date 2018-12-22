import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { GaltComponent } from './galt/galt.component';
import { VisionSafetyComponent } from './vision-safety/vision-safety.component';
import { WebAgentComponent } from './web-agent/web-agent.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { EMonthlyComponent } from './e-monthly/e-monthly.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    GaltComponent,
    VisionSafetyComponent,
    WebAgentComponent,
    CallCenterComponent,
    EMonthlyComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
