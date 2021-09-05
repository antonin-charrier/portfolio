import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  public age: number = 0;

  constructor(
    private themeService: ThemeService,
    private translateService: TranslateService,
    private viewContainerRef: ViewContainerRef
) { }

  ngOnInit() {
    if (this.themeService.isDarkTheme.value) {
      const matDialogContainerRef = this.viewContainerRef.element.nativeElement.parentElement;
      matDialogContainerRef.classList.add('dark');
    }
    this.age = Math.floor((new Date().getTime() - new Date('1997-03-10').getTime()) / 3.15576e+10);
  }

  email() {
    window.location.href = 'mailto:charrier.antonin@yahoo.fr';
  }

  phoneCall() {
    window.location.href = 'tel:+337709783302';
  }

  linkedin() {
    switch (this.translateService.currentLang) {
      case 'fr':
        window.open('https://www.linkedin.com/in/antonin-charrier/?locale=fr_FR', '_blank');
        break;
      default:
        window.open('https://www.linkedin.com/in/antonin-charrier/?locale=en_US', '_blank');
        break;
    }
  }
}
