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
  public menuState: 'closed' | 'hovered' | 'open' = 'closed';

  public openMenu() {
    if (this.menuState === 'open') {
      this.menuState = 'hovered';
    } else {
      this.menuState = 'open';
    }
  }

  public menuEnter() {
    if (this.menuState === 'open') {
      return;
    }

    this.menuState = 'hovered';
  }

  public menuLeave()  {
    if (this.menuState === 'open') {
      return;
    }

    this.menuState = 'closed';
  }
}
