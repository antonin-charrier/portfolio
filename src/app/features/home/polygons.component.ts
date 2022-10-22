import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { PolygonsAnimations } from './polygons.animations';

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

  private isMainBeingAnimated = false;
  public currentDisplay: CurrentDisplay = 'default';
  public menuItems =  [
    { link: '/about', text: 'About ⮞' },
    { link: '/projects', text: 'Projects ⮞' },
    { link: '/hobbies', text: 'Hobbies ⮞' },
    { link: '/contact', text: 'Contact ⮞' },
  ]

  public mainDelayedEnter() {
    if (this.currentDisplay === 'default' || this.currentDisplay === 'background') {
      this.currentDisplay = 'main';
      this.isMainBeingAnimated = true;
      setTimeout(() => {
        this.isMainBeingAnimated = false;
      }, 300);
    }
  }

  public mainLeave() {
    if (this.currentDisplay !== 'hover-content' && this.currentDisplay !== 'full-content') {
      this.currentDisplay = 'default';
    }
  }

  public bgStill() {
    this.currentDisplay = this.currentDisplay !== 'main' ? 'background' : 'main';
  }

  public bgMove() {
    this.currentDisplay = 'default';
  }

  public linkHover(menuItem: MenuItem) {
    if (this.isMainBeingAnimated) return;

    if (this.currentDisplay !== 'full-content') {
      this.currentDisplay = 'hover-content';
    }
  }

  public linkUnhover(menuItem: MenuItem) {
    if (this.isMainBeingAnimated) return;

    if (this.currentDisplay !== 'full-content') {
      this.currentDisplay = 'main';
    }
  }

  public linkClick(menuItem: MenuItem) {
    this.currentDisplay = 'full-content';
  }

  public home() {
    this.router.navigate(['/']);
    this.currentDisplay = 'main';
  }
}

export type CurrentDisplay = 'default' | 'background' | 'main' | 'hover-content' | 'full-content';
export interface MenuItem {
  link: string;
  text: string;
}
