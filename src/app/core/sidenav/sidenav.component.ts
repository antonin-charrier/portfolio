import { Component, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    public router: Router
  ) {}

  isProjectsExpanded: boolean;
  isTechnicalSkillsExpanded: boolean;
  isHumanSkillsExpanded: boolean;

  url(lang: string): string {
    return 'https://antonin-charrier.com/' + lang + this.router.url;
  }
}
