import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ExperienceComponent } from 'src/app/shared/dialogs/experience/experience.component';

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
    private themeService: ThemeService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this._isDarkTheme = this.themeService.isDarkTheme.value;
    this.themeService.isDarkTheme.subscribe((value: boolean) => this._isDarkTheme = value);
  }

  displayExperience(experience: string) {
    this.dialog.open(ExperienceComponent, {
      data: { experience: experience }
    });
  }
}
