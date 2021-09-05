import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WipGuard } from 'src/app/core/guards/wip.guard';
import { AutonomyComponent } from './autonomy/autonomy.component';
import { CreativityComponent } from './creativity/creativity.component';
import { HumanSkillsComponent } from './human-skills/human-skills.component';
import { KnowledgeSharingComponent } from './knowledge-sharing/knowledge-sharing.component';
import { LanguagesComponent } from './languages/languages.component';
import { TeamLeadingComponent } from './team-leading/team-leading.component';

const routes: Routes = [
  {
    path: 'human-skills', children: [
      { path: '', component: HumanSkillsComponent, canActivate: [WipGuard] },
      { path: 'autonomy', component: AutonomyComponent, canActivate: [WipGuard] },
      { path: 'creativity', component: CreativityComponent, canActivate: [WipGuard] },
      { path: 'knowledge-sharing', component: KnowledgeSharingComponent, canActivate: [WipGuard] },
      { path: 'languages', component: LanguagesComponent, canActivate: [WipGuard] },
      { path: 'team-leading', component: TeamLeadingComponent, canActivate: [WipGuard] },
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanSkillsRoutingModule { }
