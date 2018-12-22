import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalSkillsRoutingModule } from './technical-skills-routing.module';
import { TechnicalSkillsComponent } from './technical-skills.component';
import { AndroidComponent } from './android/android.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { DotNetCoreWebApiComponent } from './dot-net-core-web-api/dot-net-core-web-api.component';
import { NotionsOfArchitectureComponent } from './notions-of-architecture/notions-of-architecture.component';
import { FinancialAssessmentsComponent } from './financial-assessments/financial-assessments.component';

@NgModule({
  declarations: [
    TechnicalSkillsComponent,
    AndroidComponent,
    FrontEndComponent,
    DotNetCoreWebApiComponent,
    NotionsOfArchitectureComponent,
    FinancialAssessmentsComponent
  ],
  imports: [
    CommonModule,
    TechnicalSkillsRoutingModule
  ]
})
export class TechnicalSkillsModule { }
