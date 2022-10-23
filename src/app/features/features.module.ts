import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './home/polygons.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    PolygonsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PolygonsComponent,
    ContactComponent
  ]
})
export class FeaturesModule { }
