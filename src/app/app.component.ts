import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';
import { ThemeService } from './core/services/theme.service';
import { Observable } from 'rxjs';

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
  private _isDarkTheme = false;
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private translateService: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private themeService: ThemeService
  ) {
    this.translateService.setDefaultLang('fr');
    this.translateService.use('fr');
  }

  get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.translateService.use(lang);
    }
    this._isDarkTheme = this.themeService.isDarkTheme.value;
    this.themeService.isDarkTheme.subscribe((value: boolean) => this._isDarkTheme = value);

    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
    });

    this.breakpointObserver.observe([
      Breakpoints.Web,
      Breakpoints.TabletLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }

  onActivate(component: any) {
    if (this.sidenav.mode === 'over') { this.sidenav.close(); }
    this.linkedProjects = component.linkedProjects ? component.linkedProjects : [];
    this.linkedTechnicalSkills = component.linkedTechnicalSkills ? component.linkedTechnicalSkills : [];
    this.linkedHumanSkills = component.linkedHumanSkills ? component.linkedHumanSkills : [];
  }
}
