import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SidenavComponent
  ],
  providers: []
})
export class CoreModule { }
