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
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DelayedHoverDirective } from './directives/delayed-hover.directive';
import { MouseStillDirective } from './directives/mouse-still.directive';

@NgModule({
  declarations: [
    ArticleHeaderComponent,
    RedirectsComponent,
    ResumeComponent,
    ExperienceComponent,
    ContactInfoComponent,
    DelayedHoverDirective,
    MouseStillDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    ScrollingModule,
    TranslateModule,
    PdfViewerModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    ScrollingModule,
    TranslateModule,
    PdfViewerModule,
    BrowserModule,
    BrowserAnimationsModule,
    RedirectsComponent,
    ResumeComponent,
    ContactInfoComponent,
    ExperienceComponent,
    ArticleHeaderComponent,
    DelayedHoverDirective,
    MouseStillDirective
  ]
})
export class SharedModule { }
