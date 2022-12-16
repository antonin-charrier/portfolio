import { Component, Input } from '@angular/core';
import { MenuAnimations } from './menu.animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    MenuAnimations
  ]
})
export class MenuComponent {
  @Input() fullContent = false;
  public isMenuOpen = false;
  public isMenuHovered = false;

  public menu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public menuEnter()  {
    this.isMenuHovered = true;
  }

  public menuLeave()  {
    this.isMenuHovered = false;
  }
}
