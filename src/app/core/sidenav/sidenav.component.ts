import { Component, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    public router: Router
  ) {}

  get currentLocale(): string {
    return this.locale.substring(0, 2);
  }

  isProjectsExpanded: boolean;
  isTechnicalSkillsExpanded: boolean;
  isHumanSkillsExpanded: boolean;

  url(lang: string): string {
    return 'https://antonin-charrier.com/' + lang + this.router.url;
  }
}
