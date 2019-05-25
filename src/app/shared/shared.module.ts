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
import { ContactInfoComponent } from './components/dialogs/contact-info/contact-info.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    RedirectsComponent,
    ResumeComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TranslateModule,
    PdfViewerModule,
    RecaptchaModule,
    ScrollDispatchModule,
    LayoutModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    RedirectsComponent,
    ResumeComponent,
    ContactInfoComponent,
    TranslateModule,
    PdfViewerModule,
    RecaptchaModule,
    ScrollDispatchModule,
    LayoutModule
  ],
  entryComponents: [
    ResumeComponent,
    ContactInfoComponent
  ]
})
export class SharedModule { }
