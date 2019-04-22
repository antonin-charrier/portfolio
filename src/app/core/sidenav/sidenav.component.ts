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

  email() {
    window.location.href = 'mailto:charrier.antonin@yahoo.fr';
  }

  linkedin() {
    switch (this.translateService.currentLang) {
      case 'fr':
      default:
        window.open('https://www.linkedin.com/in/antonin-charrier/?locale=fr_FR', '_blank');
        break;
      case 'en':
        window.open('https://www.linkedin.com/in/antonin-charrier/?locale=en_US', '_blank');
        break;
    }
  }

  github() {
    window.open('https://github.com/antonin-charrier', '_blank');
  }

  cv() {
    switch (this.translateService.currentLang) {
      case 'fr':
        default:
        return 'assets/cv/CV_Antonin_CHARRIER_Fr.pdf';
      case 'en':
        return 'assets/cv/CV_Antonin_CHARRIER_En.pdf';
    }
  }
}
