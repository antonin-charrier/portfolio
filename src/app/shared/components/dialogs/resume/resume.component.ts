import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public error = false;

  constructor(
    private translateService: TranslateService
  ) { }

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
