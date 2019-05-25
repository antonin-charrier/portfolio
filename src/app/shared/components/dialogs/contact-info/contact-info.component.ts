import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
    private viewContainerRef: ViewContainerRef
) { }

  ngOnInit() {
    if (this.themeService.isDarkTheme.value) {
      const matDialogContainerRef = this.viewContainerRef.element.nativeElement.parentElement;
      matDialogContainerRef.classList.add('dark');
    }
  }
}
