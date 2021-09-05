import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslateService } from '@ngx-translate/core';
import { DisplayService } from './core/services/display.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _isDarkTheme = false;
  public linkedProjects: string[] = [];
  public linkedTechnicalSkills: string[] = [];
  public linkedHumanSkills: string[] = [];
  public isMenuOpened = false;

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  constructor(
    private translateService: TranslateService,
    private breakpointObserver: BreakpointObserver,
    private displayService: DisplayService,
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
    const darkTheme = localStorage.getItem('darkTheme');
    if (darkTheme && darkTheme === 'true') {
      this.themeService.isDarkTheme.next(true);
    }

    this._isDarkTheme = this.themeService.isDarkTheme.value;
    this.themeService.isDarkTheme.subscribe((value: boolean) => this._isDarkTheme = value);

    this.displayService.detectBreakpoints(this.breakpointObserver);
    this.displayService.breakpoint.subscribe(newDisplay => {
      if (!this.sidenav) {
        return;
      }

      switch (newDisplay) {
        case Breakpoints.HandsetPortrait:
        case Breakpoints.HandsetLandscape:
        case Breakpoints.TabletPortrait:
          this.sidenav.mode = 'over';
          this.sidenav.close();
          break;
        case Breakpoints.TabletLandscape:
        case Breakpoints.WebPortrait:
        case Breakpoints.WebLandscape:
          this.sidenav.mode = 'side';
          this.sidenav.open();
          break;
      }
    });
  }

  onActivate(component: any) {
    if (this.sidenav?.mode === 'over') { this.sidenav?.close(); }
    this.linkedProjects = component.linkedProjects ? component.linkedProjects : [];
    this.linkedTechnicalSkills = component.linkedTechnicalSkills ? component.linkedTechnicalSkills : [];
    this.linkedHumanSkills = component.linkedHumanSkills ? component.linkedHumanSkills : [];
  }
}
