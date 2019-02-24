import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HumanSkillsComponent } from './human-skills.component';
import { AutonomyComponent } from './autonomy/autonomy.component';
import { CreativityComponent } from './creativity/creativity.component';
import { KnowledgeSharingComponent } from './knowledge-sharing/knowledge-sharing.component';
import { LanguagesComponent } from './languages/languages.component';
import { TeamLeadingComponent } from './team-leading/team-leading.component';

const routes: Routes = [
  { path: 'human-skills', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'human-skills/autonomy', component: AutonomyComponent },
  { path: 'human-skills/creativity', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'human-skills/knowledge-sharing', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'human-skills/languages', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'human-skills/team-leading', redirectTo: 'wip', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanSkillsRoutingModule { }
