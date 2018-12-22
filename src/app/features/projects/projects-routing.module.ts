import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { GaltComponent } from './galt/galt.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { EMonthlyComponent } from './e-monthly/e-monthly.component';
import { VisionSafetyComponent } from './vision-safety/vision-safety.component';
import { WebAgentComponent } from './web-agent/web-agent.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/call-center', component: CallCenterComponent },
  { path: 'projects/e-monthly', component: EMonthlyComponent },
  { path: 'projects/galt', component: GaltComponent },
  { path: 'projects/vision-safety', component: VisionSafetyComponent },
  { path: 'projects/web-agent', component: WebAgentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
