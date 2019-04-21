import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public isEmailDisplayed = false;
  private dot = '<##dot##>';
  private at = '<$$at$$>';
  public email = 'charrier' + this.dot + 'antonin' + this.at + 'yahoo' + this.dot + 'fr';

  constructor(
    private translateService: TranslateService
  ) { }

  linkedin() {
    switch (this.translateService.currentLang) {
      case 'fr':
        return 'https://www.linkedin.com/in/antonin-charrier/?locale=fr_FR';
      case 'en':
        return 'https://www.linkedin.com/in/antonin-charrier/?locale=en_US';
    }
  }

  cv() {
    switch (this.translateService.currentLang) {
      case 'fr':
        return 'assets/cv/CV_Antonin_CHARRIER_Fr.pdf';
      case 'en':
        return 'assets/cv/CV_Antonin_CHARRIER_En.pdf';
    }
  }

  displayEmail() {
    this.email = this.email.replace(this.dot, '.').replace(this.at, '@');
    this.isEmailDisplayed = true;
}
}
