import { Location } from '@angular/common';
import { Component, HostBinding, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { RouteAnimations } from 'src/app/shared/animations/route-animations';
import { PolygonsAnimations, backgroundDuration, mainDuration } from './polygons.animations';

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.scss'],
  animations: [
    PolygonsAnimations,
    RouteAnimations
  ]
})
export class PolygonsComponent implements AfterViewInit {
  @HostBinding("style.--menuPaddingRight")
  menuPaddingRight: string = '50px';

  constructor(
    private router: Router,
    private location: Location,
    private contexts: ChildrenOutletContexts,
    private detector: ChangeDetectorRef
  ) { }

  ngAfterViewInit(): void {
    const currentRoute = this.location.path();
    if (currentRoute && currentRoute !== '/') {
      this.linkClick();
    }
  }

  public isBeingAnimated = false;
  public currentBgDisplay: CurrentBgDisplay = 'default';
  public currentMainDisplay: CurrentMainDisplay = 'left';
  public navItems =  [
    { link: '/about', text: $localize`About` },
    { link: '/projects', text: $localize`Projects` },
    { link: '/hobbies', text: $localize`Hobbies` },
    { link: '/contact', text: $localize`Contact` },
  ]

  public mainDelayedEnter() {
    if (this.currentBgDisplay === 'default' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('main');
    }
  }

  public mainLeave() {
    if (this.currentBgDisplay === 'main' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('default');
    }
  }

  public bgStill() {
    if (this.currentBgDisplay === 'default' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('background');
    }
  }

  public bgMove() {
    if (this.currentBgDisplay === 'main' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('default');
    }
    if (this.currentBgDisplay === 'background' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('default');
    }
  }

  public linkClick() {
    if (this.isBeingAnimated) {
      return;
    }

    if (this.currentBgDisplay === 'full-content') {
      const closeAnimationDuration = mainDuration.leftRight1 + mainDuration.leftRight2;
      this.currentMainDisplay = 'right-start';
      setTimeout(() => {
        this.currentMainDisplay = 'right-end';
      }, closeAnimationDuration);
      return;
    }

    const contentAnimationDuration = backgroundDuration.mainFull1 + backgroundDuration.mainFull2 + 100;
    this.updateBackgroundDisplay('full-content');
    setTimeout(() => {
      this.currentMainDisplay = 'right-start';
      const mainAnimationDuration = mainDuration.clip;
      setTimeout(() => {
        this.currentMainDisplay = 'right-end';
      }, mainAnimationDuration);
    }, contentAnimationDuration + 0);
  }

  public home() {
    if (this.currentBgDisplay !== 'full-content' || this.isBeingAnimated) {
      return;
    }

    this.router.navigate(['/']);
    const mainAnimationDuration = mainDuration.leftRight1 + mainDuration.leftRight2;
    this.currentMainDisplay = 'right-start';
    setTimeout(() => {
      this.currentMainDisplay = 'left';
      setTimeout(() => {
        this.updateBackgroundDisplay('main');
      }, 0);
    }, mainAnimationDuration);
  }

  private updateBackgroundDisplay(newDisplay: CurrentBgDisplay) {
    this.isBeingAnimated = true;
    this.currentBgDisplay = newDisplay;
    this.detector.detectChanges();
  }

  public bgDone() {
    this.isBeingAnimated = false;
  }

  getRouteAnimationData() {
    this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

export type CurrentBgDisplay = 'default' | 'background' | 'main' | 'full-content';
export type CurrentMainDisplay = 'left' | 'right-start' | 'right-end';
export interface NavItem {
  link: string;
  text: string;
}
