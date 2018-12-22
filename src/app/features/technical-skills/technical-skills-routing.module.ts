import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnicalSkillsComponent } from './technical-skills.component';
import { AndroidComponent } from './android/android.component';
import { DotNetCoreWebApiComponent } from './dot-net-core-web-api/dot-net-core-web-api.component';
import { FinancialAssessmentsComponent } from './financial-assessments/financial-assessments.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { NotionsOfArchitectureComponent } from './notions-of-architecture/notions-of-architecture.component';

const routes: Routes = [
  { path: 'technical-skills', component: TechnicalSkillsComponent },
  { path: 'technical-skills/android', component: AndroidComponent },
  { path: 'technical-skills/dot-net-core-web-api', component: DotNetCoreWebApiComponent },
  { path: 'technical-skills/financial-assessments', component: FinancialAssessmentsComponent },
  { path: 'technical-skills/front-end', component: FrontEndComponent },
  { path: 'technical-skills/notions-of-architecture', component: NotionsOfArchitectureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalSkillsRoutingModule { }
