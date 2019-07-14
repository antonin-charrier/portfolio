import { Component, OnInit } from '@angular/core';
import { DisplayService } from 'src/app/core/services/breakpoint.service';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss']
})
export class TechnicalSkillsComponent implements OnInit {
  public isSmallDevice = false;

  constructor(
    private displayService: DisplayService
  ) { }

  ngOnInit() {
    this.displayService.breakpoint.subscribe(newDisplay => {
      switch (newDisplay) {
        case Breakpoints.HandsetPortrait:
        case Breakpoints.HandsetLandscape:
        case Breakpoints.TabletPortrait:
          this.isSmallDevice = true;
          break;
        case Breakpoints.TabletLandscape:
        case Breakpoints.WebPortrait:
        case Breakpoints.WebLandscape:
          this.isSmallDevice = false;
          break;
      }
    });
  }
}
