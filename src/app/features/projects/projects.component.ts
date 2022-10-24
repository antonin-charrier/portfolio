import { Component, OnInit } from '@angular/core';
import { RouteAnimations } from 'src/app/shared/animations/route-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    RouteAnimations
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
