import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HumanSkillsRoutingModule } from './human-skills-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HumanSkillsComponent } from './human-skills/human-skills.component';
import { AutonomyComponent } from './autonomy/autonomy.component';
import { CreativityComponent } from './creativity/creativity.component';
import { KnowledgeSharingComponent } from './knowledge-sharing/knowledge-sharing.component';
import { LanguagesComponent } from './languages/languages.component';
import { TeamLeadingComponent } from './team-leading/team-leading.component';


@NgModule({
  declarations: [
    HumanSkillsComponent,
    AutonomyComponent,
    CreativityComponent,
    KnowledgeSharingComponent,
    LanguagesComponent,
    TeamLeadingComponent
  ],
  imports: [
    CommonModule,
    HumanSkillsRoutingModule,
    SharedModule
  ]
})
export class HumanSkillsModule { }
