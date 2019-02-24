import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { RedirectsComponent } from './components/redirects.component';

@NgModule({
  declarations: [
    RedirectsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    RedirectsComponent
  ]
})
export class SharedModule { }
