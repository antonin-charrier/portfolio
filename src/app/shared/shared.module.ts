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

@NgModule({
  declarations: [
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
    BrowserModule,
    BrowserAnimationsModule
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
    MouseStillDirective
  ]
})
export class SharedModule { }
