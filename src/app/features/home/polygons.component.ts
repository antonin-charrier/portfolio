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
  public currentDisplay: CurrentDisplay = 'default';
  public currentContentDisplay: CurrentContentDisplay = 'shrinked';
  public menuItems =  [
    { link: '/about', text: 'About ⮞' },
    { link: '/projects', text: 'Projects ⮞' },
    { link: '/hobbies', text: 'Hobbies ⮞' },
    { link: '/contact', text: 'Contact ⮞' },
  ]

  public mainDelayedEnter() {
    if (this.currentDisplay === 'default' && !this.isBeingAnimated) {
      this.updateDisplay('main', backgroundDuration.defaultMain1 + backgroundDuration.defaultMain2);
    }
  }

  public mainLeave() {
    if (this.currentDisplay === 'main' && !this.isBeingAnimated) {
      this.updateDisplay('default', backgroundDuration.defaultMain1 + backgroundDuration.defaultMain2);
    }
  }

  public bgStill() {
    if (this.currentDisplay === 'default' && !this.isBeingAnimated) {
      this.updateDisplay('background', backgroundDuration.bgDefaultTotal);
    }
  }

  public bgMove() {
    if (this.currentDisplay === 'main' && !this.isBeingAnimated) {
      this.updateDisplay('default', backgroundDuration.defaultMain1 + backgroundDuration.defaultMain2);
    }
    if (this.currentDisplay === 'background' && !this.isBeingAnimated) {
      this.updateDisplay('default', backgroundDuration.bgDefaultTotal);
    }
  }

  public linkClick() {
    const animationDuration = backgroundDuration.mainFull1 + backgroundDuration.mainFull2;
    this.updateDisplay('full-content', animationDuration);
    setTimeout(() => {
      this.currentContentDisplay = 'expanded';
    }, animationDuration);
  }

  public home() {
    const animationDuration = backgroundDuration.mainFull1 + backgroundDuration.mainFull2;
    this.router.navigate(['/']);
    this.updateDisplay('main', animationDuration);
    setTimeout(() => {
      this.currentContentDisplay = 'shrinked';
    }, animationDuration);
  }

  private updateDisplay(newDisplay: CurrentDisplay, backgroundDuration: number = 1000) {
    this.isBeingAnimated = true;
    this.currentDisplay = newDisplay;
    setTimeout(() => {
      this.isBeingAnimated = false;
    }, backgroundDuration);
  }
}

export type CurrentDisplay = 'default' | 'background' | 'main' | 'full-content';
export type CurrentContentDisplay = 'shrinked' | 'expanded';
export interface MenuItem {
  link: string;
  text: string;
}
