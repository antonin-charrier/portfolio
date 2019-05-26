import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {
  private _isDarkTheme = false;
  @Input() title: String;
  @Input() subtitle: String;

  constructor(
    private themeService: ThemeService
  ) { }

    get isDarkTheme(): boolean {
      return this._isDarkTheme;
    }

  ngOnInit() {
    this._isDarkTheme = this.themeService.isDarkTheme.value;
    this.themeService.isDarkTheme.subscribe((value: boolean) => this._isDarkTheme = value);
  }

}
