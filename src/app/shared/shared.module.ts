import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule  } from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DelayedHoverDirective } from './directives/delayed-hover.directive';
import { MouseStillDirective } from './directives/mouse-still.directive';
import { RouteComponent } from './components/route/route.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    DelayedHoverDirective,
    MouseStillDirective,
    RouteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    ScrollingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    MaterialModule,
    RouterModule,
    HttpClientModule,
    LayoutModule,
    ScrollingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DelayedHoverDirective,
    MouseStillDirective,
    MatIconModule
  ]
})
export class SharedModule { }
