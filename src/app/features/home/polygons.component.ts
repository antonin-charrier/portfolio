import { Location } from '@angular/common';
import { Component, HostBinding, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { RouteAnimations } from 'src/app/shared/animations/route-animations';
import { PolygonsAnimations, cmDuration } from './polygons.animations';

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

  public isBeingAnimated = false;
  public isMenuDisplayed = false;
  public currentDisplay: CurrentDisplay = 'default';
  public navItems =  [
    { link: '/about', text: $localize`About` },
    { link: '/projects', text: $localize`Projects` },
    { link: '/hobbies', text: $localize`Hobbies` },
    { link: '/contact', text: $localize`Contact` },
  ];

  ngAfterViewInit(): void {
    const currentRoute = this.location.path();
    if (currentRoute && currentRoute !== '/') {
      this.linkClick();
    }
  }

  public mainDelayedEnter() {
    if (this.currentDisplay === 'default' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('main');
    }
  }

  public mainLeave() {
    if (this.currentDisplay === 'main' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('default');
    }
  }

  public bgStill() {
    if (this.currentDisplay === 'default' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('background');
    }
  }

  public bgMove() {
    if (this.currentDisplay === 'main' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('default');
    }
    if (this.currentDisplay === 'background' && !this.isBeingAnimated) {
      this.updateBackgroundDisplay('default');
    }
  }

  public linkClick() {
    if (this.isBeingAnimated) {
      return;
    }

    this.updateBackgroundDisplay('full-content');
  }

  public home() {
    if (this.currentDisplay !== 'full-content' || this.isBeingAnimated) {
      return;
    }

    this.router.navigate(['/']);
    this.updateBackgroundDisplay('main');
  }

  private updateBackgroundDisplay(newDisplay: CurrentDisplay) {
    if (newDisplay === this.currentDisplay) {
      return;
    }

    this.isBeingAnimated = true;
    this.currentDisplay = newDisplay;
    this.detector.detectChanges();
    this.isMenuDisplayed = ['main', 'full-content'].includes(this.currentDisplay);
  }

  public logEvent(e: any) {
    console.log(e);
  }

  public contentMainDone() {
    this.isBeingAnimated = false;
  }

  public getRouteAnimationData() {
    this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

export type CurrentDisplay = 'default' | 'background' | 'main' | 'full-content';
export interface NavItem {
  link: string;
  text: string;
}
