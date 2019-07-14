import { Component, OnInit } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { DisplayService } from 'src/app/core/services/breakpoint.service';

@Component({
  selector: 'app-human-skills',
  templateUrl: './human-skills.component.html',
  styleUrls: ['./human-skills.component.scss']
})
export class HumanSkillsComponent implements OnInit {
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
