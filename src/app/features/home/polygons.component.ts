import { Location } from '@angular/common';
import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolygonsAnimations, backgroundDuration } from './polygons.animations';

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.scss'],
  animations: PolygonsAnimations
})
export class PolygonsComponent implements AfterViewInit {
  @HostBinding("style.--menuPaddingRight")
  menuPaddingRight: string = '50px';

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngAfterViewInit(): void {
    const currentRoute = this.location.path();
    if (currentRoute && currentRoute !== '/') {
      this.linkClick();
    }
  }

  public isBeingAnimated = false;
  public currentBackgroundDisplay: CurrentBackgroundDisplay = 'default';
  public currentMainDisplay: CurrentMainDisplay = 'left';
  public menuItems =  [
    { link: '/about', text: 'About ⮞' },
    { link: '/projects', text: 'Projects ⮞' },
    { link: '/hobbies', text: 'Hobbies ⮞' },
    { link: '/contact', text: 'Contact ⮞' },
  ]

  public mainDelayedEnter() {
    if (this.currentBackgroundDisplay === 'default' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('main', backgroundDuration.defaultMain1 + backgroundDuration.defaultMain2);
    }
  }

  public mainLeave() {
    if (this.currentBackgroundDisplay === 'main' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('default', backgroundDuration.defaultMain1 + backgroundDuration.defaultMain2);
    }
  }

  public bgStill() {
    if (this.currentBackgroundDisplay === 'default' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('background', backgroundDuration.bgDefaultTotal);
    }
  }

  public bgMove() {
    if (this.currentBackgroundDisplay === 'main' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('default', backgroundDuration.defaultMain1 + backgroundDuration.defaultMain2);
    }
    if (this.currentBackgroundDisplay === 'background' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('default', backgroundDuration.bgDefaultTotal);
    }
  }

  public linkClick() {
    const animationDuration = backgroundDuration.mainFull1 + backgroundDuration.mainFull2 + 100;
    this.updateBackgroundDisplay('full-content', animationDuration);
    setTimeout(() => {
      this.currentMainDisplay = 'right';
    }, animationDuration + 100);
  }

  public home() {
    const animationDuration = backgroundDuration.mainFull1 + backgroundDuration.mainFull2 + 100;
    this.router.navigate(['/']);
    this.currentMainDisplay = 'left';
    setTimeout(() => {
      this.updateBackgroundDisplay('main', animationDuration);
    }, 100);
  }

  private updateBackgroundDisplay(newDisplay: CurrentBackgroundDisplay, backgroundDuration: number = 1000) {
    this.isBeingAnimated = true;
    this.currentBackgroundDisplay = newDisplay;
    setTimeout(() => {
      this.isBeingAnimated = false;
    }, backgroundDuration);
  }
}

export type CurrentBackgroundDisplay = 'default' | 'background' | 'main' | 'full-content';
export type CurrentMainDisplay = 'left' | 'right';
export interface MenuItem {
  link: string;
  text: string;
}
