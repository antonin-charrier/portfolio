import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  linkedProjects: string[] = [];
  linkedTechnicalSkills: string[] = [];
  linkedHumanSkills: string[] = [];
  isMenuOpened = false;

  constructor(
    private translateService: TranslateService
  ) {
    this.translateService.setDefaultLang('fr');
    this.translateService.use('fr');
  }

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.translateService.use(lang);
    }
  }

  onActivate(component: any) {
    this.linkedProjects = component.linkedProjects ? component.linkedProjects : [];
    this.linkedTechnicalSkills = component.linkedTechnicalSkills ? component.linkedTechnicalSkills : [];
    this.linkedHumanSkills = component.linkedHumanSkills ? component.linkedHumanSkills : [];
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
