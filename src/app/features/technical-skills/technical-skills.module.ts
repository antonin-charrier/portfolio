import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicalSkillsRoutingModule } from './technical-skills-routing.module';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { AndroidComponent } from './android/android.component';
import { DotNetCoreWebApiComponent } from './dot-net-core-web-api/dot-net-core-web-api.component';
import { FinancialAssessmentsComponent } from './financial-assessments/financial-assessments.component';
import { FrontEndComponent } from './front-end/front-end.component';
import { NotionsOfArchitectureComponent } from './notions-of-architecture/notions-of-architecture.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TechnicalSkillsComponent,
    AndroidComponent,
    DotNetCoreWebApiComponent,
    FinancialAssessmentsComponent,
    FrontEndComponent,
    NotionsOfArchitectureComponent
  ],
  imports: [
    CommonModule,
    TechnicalSkillsRoutingModule,
    SharedModule
  ]
})
export class TechnicalSkillsModule { }
