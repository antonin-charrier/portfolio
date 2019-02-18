import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  constructor(
    public router: Router
  ) { }

  private isProjectsExpanded: boolean;
  private isTechnicalSkillsExpanded: boolean;
  private isHumanSkillsExpanded: boolean;
}
