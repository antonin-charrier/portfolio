import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatSidenavContainer } from '@angular/material';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor(
    public router: Router,
    public translateService: TranslateService
  ) {}

  get locale(): string {
    return this.translateService.currentLang.toLocaleUpperCase();
  }

  isProjectsExpanded: boolean;
  isTechnicalSkillsExpanded: boolean;
  isHumanSkillsExpanded: boolean;

  setLang(lang: string) {
    this.translateService.use(lang);
  }
}
