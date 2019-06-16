import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ResumeComponent } from 'src/app/shared/components/dialogs/resume/resume.component';
import { ContactInfoComponent } from 'src/app/shared/components/dialogs/contact-info/contact-info.component';
import { ThemeService } from '../services/theme.service';
import { Breakpoints } from '@angular/cdk/layout';
import { DisplayService } from '../services/breakpoint.service';
import { Router, NavigationEnd } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public isProjectsExpanded = false;
  public isTechnicalSkillsExpanded = false;
  public isHumanSkillsExpanded = false;
  public isOver = false;
  private _isDarkTheme = false;

  constructor(
    private translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private dialog: MatDialog,
    private themeService: ThemeService,
    private displayService: DisplayService,
    private router: Router
  ) { }

  get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }

  ngOnInit() {
    this._isDarkTheme = this.themeService.isDarkTheme.value;
    this.themeService.isDarkTheme.subscribe((value: boolean) => this._isDarkTheme = value);
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/linkedin.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `moon`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/moon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `sun`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/sun.svg')
    );
    this.matIconRegistry.addSvgIcon(
      `route`,
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/route.svg')
    );

    this.displayService.breakpoint.subscribe(newDisplay => {
      switch (newDisplay) {
        case Breakpoints.HandsetPortrait:
        case Breakpoints.HandsetLandscape:
        case Breakpoints.TabletPortrait:
          this.isOver = true;
          break;
        case Breakpoints.TabletLandscape:
        case Breakpoints.WebPortrait:
        case Breakpoints.WebLandscape:
          this.isOver = false;
          break;
      }
    });

    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        switch (value.urlAfterRedirects) {
          case '/projects/call-center':
          case '/projects/e-monthly':
          case '/projects/galt':
          case '/projects/vision-safety':
          case '/projects/web-agent':
            this.isProjectsExpanded = true;
            timer(100).subscribe(() => document.getElementById('scroll-list').scrollTop = 0);
            break;
          case '/technical-skills/android':
          case '/technical-skills/dot-net-core-web-api':
          case '/technical-skills/financial-assessments':
          case '/technical-skills/front-end':
          case '/technical-skills/notions-of-architecture':
            this.isTechnicalSkillsExpanded = true;
            timer(100).subscribe(() => document.getElementById('scroll-list').scrollTop = this.isProjectsExpanded ? 220 : 20);
            break;
          case '/human-skills/autonomy':
          case '/human-skills/creativity':
          case '/human-skills/knowledge-sharing':
          case '/human-skills/languages':
          case '/human-skills/team-leading':
            this.isHumanSkillsExpanded = true;
            timer(100).subscribe(() => document.getElementById('scroll-list').scrollTop = 450);
            break;
        }
      }
    });
  }

  get locale(): string {
    return this.translateService.currentLang.toLocaleUpperCase();
  }

  setLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
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

  resume() {
    this.dialog.open(ResumeComponent, {
      height: '80vh',
      width: '65vw'
    });
  }

  contactInfo() {
    this.dialog.open(ContactInfoComponent, {
      height: '40vh',
      width: '75vw'
    });
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.isDarkTheme.next(checked);
    localStorage.setItem('darkTheme', checked.toString());
  }
}
