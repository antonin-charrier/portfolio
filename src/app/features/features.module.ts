import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './home/polygons.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PolygonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PolygonsComponent,
  ]
})
export class FeaturesModule { }
