import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public isEmailDisplayed = false;
  private dot = '<%#%dot%#%>';
  private at = '<#%#at#%#>';
  public email = 'charrier' + this.dot + 'antonin' + this.at + 'yahoo' + this.dot + 'fr';

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    if (!environment.production) {
      this.displayEmail();
    }
  }

  linkedin() {
    switch (this.translateService.currentLang) {
      case 'fr':
      default:
        return 'https://www.linkedin.com/in/antonin-charrier/?locale=fr_FR';
      case 'en':
        return 'https://www.linkedin.com/in/antonin-charrier/?locale=en_US';
    }
  }

  cv() {
    switch (this.translateService.currentLang) {
      case 'fr':
      default:
        return 'assets/cv/CV_Antonin_CHARRIER_Fr.pdf';
      case 'en':
        return 'assets/cv/CV_Antonin_CHARRIER_En.pdf';
    }
  }

  displayEmail() {
    let regex = new RegExp(this.dot, 'g');
    this.email = this.email.replace(regex, '.');
    regex = new RegExp(this.at, 'g');
    this.email = this.email.replace(regex, '@');
    this.isEmailDisplayed = true;
  }
}
