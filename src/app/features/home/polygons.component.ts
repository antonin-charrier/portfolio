import { Component } from '@angular/core';
import { PolygonsAnimations } from './polygons.animations';

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.scss'],
  animations: PolygonsAnimations
})
export class PolygonsComponent {
  public currentDisplay: CurrentDisplay = 'default';
  public menuItems =  [
    { link: '/about', text: 'About ⮞' },
    { link: '/projects', text: 'Projects ⮞' },
    { link: '/hobbies', text: 'Hobbies ⮞' },
    { link: '/contact', text: 'Contact ⮞' },
  ]

  public mainDelayedEnter() {
    this.currentDisplay = 'main';
  }

  public mainLeave() {
    this.currentDisplay = 'default';
  }

  public bgStill() {
    this.currentDisplay = this.currentDisplay !== 'main' ? 'background' : 'main';
  }

  public bgMove() {
    this.currentDisplay = 'default';
  }

  public linkHover(menuItem: MenuItem) {
    this.currentDisplay = 'hover-content';
  }

  public linkClick(menuItem: MenuItem) {
    this.currentDisplay = 'full-content';
  }
}

export type CurrentDisplay = 'default' | 'background' | 'main' | 'hover-content' | 'full-content';
export interface MenuItem {
  link: string;
  text: string;
}
