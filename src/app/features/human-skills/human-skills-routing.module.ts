import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HumanSkillsComponent } from './human-skills.component';
import { AutonomyComponent } from './autonomy/autonomy.component';
import { CreativityComponent } from './creativity/creativity.component';
import { KnowledgeSharingComponent } from './knowledge-sharing/knowledge-sharing.component';
import { LanguagesComponent } from './languages/languages.component';
import { TeamLeadingComponent } from './team-leading/team-leading.component';

const routes: Routes = [
  { path: 'human-skills', component: HumanSkillsComponent },
  { path: 'human-skills/autonomy', component: AutonomyComponent },
  { path: 'human-skills/creativity', component: CreativityComponent },
  { path: 'human-skills/knowledge-sharing', component: KnowledgeSharingComponent },
  { path: 'human-skills/languages', component: LanguagesComponent },
  { path: 'human-skills/team-leading', component: TeamLeadingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanSkillsRoutingModule { }
