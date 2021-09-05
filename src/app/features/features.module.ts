import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { WipComponent } from './wip/wip.component';
import { AboutComponent } from './about/about.component';
import { CareerComponent } from './career/career.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HumanSkillsModule } from './human-skills/human-skills.module';
import { ProjectsModule } from './projects/projects.module';
import { TechnicalSkillsModule } from './technical-skills/technical-skills.module';

@NgModule({
  declarations: [
    HomeComponent,
    WipComponent,
    AboutComponent,
    CareerComponent,
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HumanSkillsModule,
    ProjectsModule,
    TechnicalSkillsModule
  ]
})
export class FeaturesModule { }
