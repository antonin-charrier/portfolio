import { Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { experience: string },
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
