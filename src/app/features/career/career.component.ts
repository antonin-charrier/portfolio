import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  private _isDarkTheme = false;

  get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this._isDarkTheme = this.themeService.isDarkTheme.value;
    this.themeService.isDarkTheme.subscribe((value: boolean) => this._isDarkTheme = value);
  }
}
