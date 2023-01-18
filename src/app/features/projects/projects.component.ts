import { Component } from '@angular/core';
import { RouteComponent } from 'src/app/shared/components/route/route.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [
    './../../shared/components/route/route.component.scss',
    './projects.component.scss'
  ]
})
export class ProjectsComponent extends RouteComponent {}
