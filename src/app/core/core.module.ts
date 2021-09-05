import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageNotFoundModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class CoreModule { }
