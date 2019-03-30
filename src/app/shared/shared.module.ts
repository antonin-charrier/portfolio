import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { RedirectsComponent } from './components/redirects.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RedirectsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    RedirectsComponent,
    TranslateModule
  ]
})
export class SharedModule { }
