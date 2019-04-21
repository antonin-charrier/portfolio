import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { RedirectsComponent } from './components/redirects.component';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    RedirectsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TranslateModule,
    PdfViewerModule,
    RecaptchaModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    RedirectsComponent,
    TranslateModule,
    PdfViewerModule,
    RecaptchaModule
  ]
})
export class SharedModule { }
