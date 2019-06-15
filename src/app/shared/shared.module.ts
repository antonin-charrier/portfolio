import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { RedirectsComponent } from './components/redirects/redirects.component';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ResumeComponent } from './components/dialogs/resume/resume.component';
import { ContactInfoComponent } from './components/dialogs/contact-info/contact-info.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ArticleHeaderComponent } from './components/article-header/article-header.component';
import { ExperienceComponent } from './components/dialogs/experience/experience.component';

@NgModule({
  declarations: [
    RedirectsComponent,
    ResumeComponent,
    ContactInfoComponent,
    ArticleHeaderComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    TranslateModule,
    PdfViewerModule,
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
    ScrollDispatchModule,
    LayoutModule,
    ArticleHeaderComponent,
    ExperienceComponent
  ],
  entryComponents: [
    ResumeComponent,
    ContactInfoComponent,
    ExperienceComponent
  ]
})
export class SharedModule { }
