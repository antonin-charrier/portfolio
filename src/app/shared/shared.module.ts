import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule  } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { ArticleHeaderComponent } from './components/article-header/article-header.component';
import { RedirectsComponent } from './components/redirects/redirects.component';
import { ResumeComponent } from './dialogs/resume/resume.component';
import { ExperienceComponent } from './dialogs/experience/experience.component';
import { ContactInfoComponent } from './dialogs/contact-info/contact-info.component';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    ArticleHeaderComponent,
    RedirectsComponent,
    ResumeComponent,
    ExperienceComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    ScrollingModule,
    TranslateModule,
    PdfViewerModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    ScrollingModule,
    TranslateModule,
    PdfViewerModule,
    RedirectsComponent,
    ResumeComponent,
    ContactInfoComponent,
    ExperienceComponent,
    ArticleHeaderComponent
  ]
})
export class SharedModule { }
