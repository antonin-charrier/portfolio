import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WipGuard } from 'src/app/core/guards/wip.guard';
import { AndroidComponent } from './android/android.component';
import { DotNetCoreWebApiComponent } from './dot-net-core-web-api/dot-net-core-web-api.component';
import { FinancialAssessmentsComponent } from './financial-assessments/financial-assessments.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { NotionsOfArchitectureComponent } from './notions-of-architecture/notions-of-architecture.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';

const routes: Routes = [
  { path: 'technical-skills', children: [
    { path: '', component: TechnicalSkillsComponent, canActivate: [WipGuard] },
    { path: 'android', component: AndroidComponent, canActivate: [WipGuard] },
    { path: 'dot-net-core-web-api', component: DotNetCoreWebApiComponent, canActivate: [WipGuard] },
    { path: 'financial-assessments', component: FinancialAssessmentsComponent, canActivate: [WipGuard] },
    { path: 'front-end', component: FrontEndComponent, canActivate: [WipGuard] },
    { path: 'notions-of-architecture', component: NotionsOfArchitectureComponent, canActivate: [WipGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalSkillsRoutingModule { }
