import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsComponent } from './home/polygons.component';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    PolygonsComponent,
    ContactComponent,
    HobbiesComponent,
    ProjectsComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    PolygonsComponent,
    ContactComponent
  ]
})
export class FeaturesModule { }
