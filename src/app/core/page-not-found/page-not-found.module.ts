;
import { PageNotFoundComponent } from './component/page-not-found.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    SharedModule
  ]
})
export class PageNotFoundModule { }
