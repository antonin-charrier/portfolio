import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { RedirectsComponent } from './components/redirects/redirects.component';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RecaptchaModule } from 'ng-recaptcha';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ResumeComponent } from './components/dialogs/resume/resume.component';

@NgModule({
  declarations: [
    RedirectsComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TranslateModule,
    PdfViewerModule,
    RecaptchaModule,
    ScrollDispatchModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    RedirectsComponent,
    ResumeComponent,
    TranslateModule,
    PdfViewerModule,
    RecaptchaModule,
    ScrollDispatchModule
  ],
  entryComponents: [
    ResumeComponent
  ]
})
export class SharedModule { }
