import { Location } from '@angular/common';
import { Component, HostBinding, AfterViewInit } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { PolygonsAnimations, backgroundDuration, mainDuration } from './polygons.animations';

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.scss'],
  animations: [
    PolygonsAnimations
  ]
})
export class PolygonsComponent implements AfterViewInit {
  @HostBinding("style.--menuPaddingRight")
  menuPaddingRight: string = '50px';

  constructor(
    private router: Router,
    private location: Location,
    private contexts: ChildrenOutletContexts
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
    if (this.currentBackgroundDisplay === 'full-content' || this.isBeingAnimated) {
      return;
    }

    const contentAnimationDuration = backgroundDuration.mainFull1 + backgroundDuration.mainFull2 + 100;
    this.updateBackgroundDisplay('full-content', contentAnimationDuration);
    setTimeout(() => {
      this.currentMainDisplay = 'right-start';
      const mainAnimationDuration = mainDuration.clip;
      setTimeout(() => {
        this.currentMainDisplay = 'right-end';
      }, mainAnimationDuration);
    }, contentAnimationDuration + 0);
  }

  public home() {
    const contentAnimationDuration = backgroundDuration.mainFull1 + backgroundDuration.mainFull2 + 100;
    this.router.navigate(['/']);
    const mainAnimationDuration = mainDuration.leftRight1 + mainDuration.leftRight2;
    this.currentMainDisplay = 'right-start';
    setTimeout(() => {
      this.currentMainDisplay = 'left';
      setTimeout(() => {
        this.updateBackgroundDisplay('main', contentAnimationDuration);
      }, 0);
    }, mainAnimationDuration);
  }

  private updateBackgroundDisplay(newDisplay: CurrentBackgroundDisplay, backgroundDuration: number = 1000) {
    this.isBeingAnimated = true;
    this.currentBackgroundDisplay = newDisplay;
    setTimeout(() => {
      this.isBeingAnimated = false;
    }, backgroundDuration);
  }

  public getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

export type CurrentBackgroundDisplay = 'default' | 'background' | 'main' | 'full-content';
export type CurrentMainDisplay = 'left' | 'right-start' | 'right-end';
export interface MenuItem {
  link: string;
  text: string;
}
