import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WipGuard } from 'src/app/core/guards/wip.guard';
import { CallCenterComponent } from './call-center/call-center.component';
import { EMonthlyComponent } from './e-monthly/e-monthly.component';
import { GaltComponent } from './galt/galt.component';
import { ProjectsComponent } from './projects/projects.component';
import { VisionSafetyComponent } from './vision-safety/vision-safety.component';
import { WebAgentComponent } from './web-agent/web-agent.component';

const routes: Routes = [
  { path: 'projects', children: [
    { path: '', component: ProjectsComponent, canActivate: [WipGuard] },
    { path: 'call-center', component: CallCenterComponent, canActivate: [WipGuard] },
    { path: 'e-monthly', component: EMonthlyComponent, canActivate: [WipGuard] },
    { path: 'galt', component: GaltComponent, canActivate: [WipGuard] },
    { path: 'vision-safety', component: VisionSafetyComponent, canActivate: [WipGuard] },
    { path: 'web-agent', component: WebAgentComponent, canActivate: [WipGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
