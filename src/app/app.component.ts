import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _isDarkTheme = false;

  constructor(
    private translateService: TranslateService,
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
  }
}
