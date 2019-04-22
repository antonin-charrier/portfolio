import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WipComponent } from './wip/wip.component';
import { SharedModule } from '../shared/shared.module';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { ProjectsModule } from './projects/projects.module';
import { TechnicalSkillsModule } from './technical-skills/technical-skills.module';
import { HumanSkillsModule } from './human-skills/human-skills.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    WipComponent,
    HobbiesComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProjectsModule,
    TechnicalSkillsModule,
    HumanSkillsModule
  ],
  exports: []
})
export class FeaturesModule { }
