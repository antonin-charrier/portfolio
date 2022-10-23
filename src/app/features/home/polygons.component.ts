import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { PolygonsAnimations, duration as AnimationDuration } from './polygons.animations';

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.scss'],
  animations: PolygonsAnimations
})
export class PolygonsComponent {
  @HostBinding("style.--menuPaddingRight")
  menuPaddingRight: string = '50px';

  constructor(
    private router: Router
  ) { }

  public isBeingAnimated = false;
  public currentDisplay: CurrentDisplay = 'default';
  public menuItems =  [
    { link: '/about', text: 'About ⮞' },
    { link: '/projects', text: 'Projects ⮞' },
    { link: '/hobbies', text: 'Hobbies ⮞' },
    { link: '/contact', text: 'Contact ⮞' },
  ]

  public mainDelayedEnter() {
    if (this.currentDisplay === 'default' && !this.isBeingAnimated) {
      this.updateDisplay('main', AnimationDuration.defaultMain1 + AnimationDuration.defaultMain2);
    }
  }

  public mainLeave() {
    if (this.currentDisplay === 'main' && !this.isBeingAnimated) {
      this.updateDisplay('default', AnimationDuration.defaultMain1 + AnimationDuration.defaultMain2);
    }
  }

  public bgStill() {
    if (this.currentDisplay === 'default' && !this.isBeingAnimated) {
      this.updateDisplay('background', AnimationDuration.bgDefaultTotal);
    }
  }

  public bgMove() {
    if (this.currentDisplay === 'main' && !this.isBeingAnimated) {
      this.updateDisplay('default', AnimationDuration.defaultMain1 + AnimationDuration.defaultMain2);
    }
    if (this.currentDisplay === 'background' && !this.isBeingAnimated) {
      this.updateDisplay('default', AnimationDuration.bgDefaultTotal);
    }
  }

  public linkHover(menuItem: MenuItem) {

  }

  public linkUnhover(menuItem: MenuItem) {

  }

  public linkClick(menuItem: MenuItem) {
    this.updateDisplay('full-content', AnimationDuration.mainFull1 + AnimationDuration.mainFull2);
  }

  public home() {
    this.router.navigate(['/']);
    this.updateDisplay('main', AnimationDuration.mainFull1 + AnimationDuration.mainFull2);
  }

  private updateDisplay(newDisplay: CurrentDisplay, animationDuration: number = 1000) {
    console.log('newDisplay', newDisplay);
    this.isBeingAnimated = true;
    this.currentDisplay = newDisplay;
    setTimeout(() => {
      this.isBeingAnimated = false;
    }, animationDuration);
  }
}

export type CurrentDisplay = 'default' | 'background' | 'main' | 'full-content';
export interface MenuItem {
  link: string;
  text: string;
}
