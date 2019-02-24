import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnicalSkillsComponent } from './technical-skills.component';
import { AndroidComponent } from './android/android.component';
import { DotNetCoreWebApiComponent } from './dot-net-core-web-api/dot-net-core-web-api.component';
import { FinancialAssessmentsComponent } from './financial-assessments/financial-assessments.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { NotionsOfArchitectureComponent } from './notions-of-architecture/notions-of-architecture.component';

const routes: Routes = [
  { path: 'technical-skills', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'technical-skills/android', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'technical-skills/dot-net-core-web-api', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'technical-skills/financial-assessments', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'technical-skills/front-end', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'technical-skills/notions-of-architecture', redirectTo: 'wip', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalSkillsRoutingModule { }
