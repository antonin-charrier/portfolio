import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { GaltComponent } from './galt/galt.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { EMonthlyComponent } from './e-monthly/e-monthly.component';
import { VisionSafetyComponent } from './vision-safety/vision-safety.component';
import { WebAgentComponent } from './web-agent/web-agent.component';

const routes: Routes = [
  { path: 'projects', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'projects/call-center', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'projects/e-monthly', component: EMonthlyComponent },
  { path: 'projects/galt', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'projects/vision-safety', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'projects/web-agent', redirectTo: 'wip', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
