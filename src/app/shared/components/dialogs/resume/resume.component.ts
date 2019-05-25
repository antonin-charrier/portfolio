import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  public error = false;

  constructor(
    private translateService: TranslateService,
    private themeService: ThemeService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    if (this.themeService.isDarkTheme.value) {
      const matDialogContainerRef = this.viewContainerRef.element.nativeElement.parentElement;
      matDialogContainerRef.classList.add('dark');
    }
  }

  resume() {
    switch (this.translateService.currentLang) {
      case 'fr':
      default:
        return 'assets/resume/CV_Antonin_CHARRIER_Fr.pdf';
      case 'en':
        return 'assets/resume/Resume_Antonin_CHARRIER_En.pdf';
    }
  }
}
