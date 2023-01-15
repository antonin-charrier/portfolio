import { Component } from '@angular/core';
import { RouteComponent } from 'src/app/shared/components/route/route.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: [
    './../../shared/components/route/route.component.scss',
    './about.component.scss'
  ]
})
export class AboutComponent extends RouteComponent {}
