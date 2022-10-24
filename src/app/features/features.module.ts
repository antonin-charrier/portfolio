import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './home/polygons.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    PolygonsComponent,
    ContactComponent,
    HobbiesComponent,
    ProjectsComponent,
    AboutComponent
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
