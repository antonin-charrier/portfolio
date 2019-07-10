import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/core/services/breakpoint.service';
import { Breakpoints } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isSmallDevice = false;
  public keywords: string[] = [];
  private _isDarkTheme = false;

  constructor(
    private displayService: DisplayService,
    private translateService: TranslateService,
    private themeService: ThemeService
  ) { }

  get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }


  ngOnInit() {
    this.displayService.breakpoint.subscribe(newDisplay => {
      switch (newDisplay) {
        case Breakpoints.HandsetPortrait:
        case Breakpoints.HandsetLandscape:
        case Breakpoints.TabletPortrait:
          this.isSmallDevice = true;
          break;
        case Breakpoints.TabletLandscape:
        case Breakpoints.WebPortrait:
        case Breakpoints.WebLandscape:
          this.isSmallDevice = false;
          break;
      }
    });

    this._isDarkTheme = this.themeService.isDarkTheme.value;
    this.themeService.isDarkTheme.subscribe((value: boolean) => this._isDarkTheme = value);

    this.translateService.get('home.keywords').subscribe(translations => {
      this.keywords = this.repeat(this.shuffle(Object.values(translations)), 2);
    });
  }

  private shuffle(array: any[]): any[] {
    return array.map(a => [Math.random(), a]).sort((a, b) => a[0] - b[0]).map(a => a[1]);
  }

  private repeat(array: any[], n: number) {
    let out = [];
    for (let i = 0; i < n; i++) {
        out = out.concat(array);
    }
    return out;
  }
}
