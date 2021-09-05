import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public error = false;

  // TODO: Replace ng2-pdf-viewer by ngx-extended-pdf-viewer

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
        return 'assets/documents/CV_Antonin_CHARRIER_Fr.pdf';
      default:
        return 'assets/documents/Resume_Antonin_CHARRIER_En.pdf';
    }
  }
}
