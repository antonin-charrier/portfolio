import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WipComponent } from './wip/wip.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WipComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: []
})
export class FeaturesModule { }
