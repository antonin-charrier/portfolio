import { Component, ElementRef, Input, Renderer2, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { MenuAnimations } from './menu.animations';

export interface MenuItem {
  img: 'none' | 'malt' | 'linkedin' | 'github' | 'email',
  text: string,
  href: string
};

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
  @ViewChild('closeMenuBtn') closeMenuBtn!: ElementRef;
  public menuState: 'closed' | 'hovered' | 'open' = 'closed';
  public linkHovered: 'none' | 'malt' | 'linkedin' | 'github' | 'email' = 'none';
  private isMenuHovered = false;
  private canCloseMenu = false;
  public menuItems: MenuItem[] = [];

  constructor(
    private renderer: Renderer2,
    private viewRef: ViewContainerRef,
    private detector: ChangeDetectorRef
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      const isCloseButton = this.closeMenuBtn && e.target === this.closeMenuBtn.nativeElement;
      const children: any[] =  Array.from(this.viewRef.element.nativeElement.children);
      if (isCloseButton || (e.target !== this.viewRef.element.nativeElement && !this.childrenContain(e.target, children))) {
        this.closeMenu();
      }
    });
  }

  private childrenContain(target: EventTarget | null, children: any[]): boolean {
    if (!children) {
      return false;
    }
    if (children.includes(target)) {
      return true;
    }
    return children.some(c => this.childrenContain(target, Array.from(c.children)));
  }

  public openMenu() {
    if (this.menuState === 'open') {
      return;
    }

    this.menuState = 'open';
    this.detector.detectChanges();
    this.fillMenu();

    this.canCloseMenu = false;
    setTimeout(() => {
      this.canCloseMenu = true;
    }, 100);
  }

  public closeMenu() {
    if (this.menuState !== 'open' || !this.canCloseMenu) {
      return;
    }

    this.menuItems = [];
    this.detector.detectChanges();
    this.menuState = 'hovered';
    this.isMenuHovered = false;

    setTimeout(() => {
      if (!this.isMenuHovered) {
        this.menuState = 'closed';
      }
    }, 100);
  }

  public menuEnter() {
    if (this.menuState === 'open') {
      return;
    }

    this.menuState = 'hovered';
    this.isMenuHovered = true;
  }

  public menuLeave()  {
    if (this.menuState === 'open') {
      return;
    }

    this.menuState = 'closed';
  }

  public linkEnter(link: 'none' | 'malt' | 'linkedin' | 'github' | 'email') {
    this.linkHovered = link;
  }

  public linkLeave()  {
    this.linkHovered = 'none';
  }

  public isHovered(link: 'none' | 'malt' | 'linkedin' | 'github' | 'email') {
    return this.linkHovered === link;
  }

  public src(link: 'none' | 'malt' | 'linkedin' | 'github' | 'email') {
    if (link === 'none') {
      return '';
    }

    return `assets/icons/${link}${this.isHovered(link) ? '_light' : ''}.png`;
  }

  private fillMenu() {
    this.menuItems = [
      {
        img: 'malt',
        text: 'Malt',
        href: 'https://www.malt.fr/profile/antonincharrier'
      },
      {
        img: 'linkedin',
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/antonin-charrier'
      },
      {
        img: 'github',
        text: 'GitHub',
        href: 'https://github.com/antonin-charrier'
      },
      {
        img: 'email',
        text: 'Email me',
        href: 'mailto: contact@antonin-charrier.com'
      }
    ];
  }
}
