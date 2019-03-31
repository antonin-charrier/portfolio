import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanSkillsRoutingModule } from './human-skills-routing.module';
import { HumanSkillsComponent } from './human-skills.component';
import { AutonomyComponent } from './autonomy/autonomy.component';
import { CreativityComponent } from './creativity/creativity.component';
import { TeamLeadingComponent } from './team-leading/team-leading.component';
import { LanguagesComponent } from './languages/languages.component';
import { KnowledgeSharingComponent } from './knowledge-sharing/knowledge-sharing.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    HumanSkillsComponent,
    AutonomyComponent,
    CreativityComponent,
    TeamLeadingComponent,
    LanguagesComponent,
    KnowledgeSharingComponent
  ],
  imports: [
    CommonModule,
    HumanSkillsRoutingModule,
    TranslateModule
  ]
})
export class HumanSkillsModule { }
