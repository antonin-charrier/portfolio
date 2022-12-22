import { Component, ElementRef, Input, Renderer2, ViewChild, ViewContainerRef, ChangeDetectorRef, Inject, LOCALE_ID } from '@angular/core';
import { MenuAnimations } from './menu.animations';

export type Link = 'none' | 'malt' | 'linkedin' | 'github' | 'email' | 'croissant' | 'tea';
export interface MenuItem {
  img: Link,
  text: string,
  href: string,
  target: '_blank' | '_self';
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
  public linkHovered: Link = 'none';
  private isMenuHovered = false;
  private canCloseMenu = false;
  public menuItems: MenuItem[] = [];

  constructor(
    @Inject(LOCALE_ID)
    private locale: string,
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

  public linkEnter(link: Link) {
    this.linkHovered = link;
  }

  public linkLeave()  {
    this.linkHovered = 'none';
  }

  public isHovered(link: Link) {
    return this.linkHovered === link;
  }

  public src(link: Link) {
    if (link === 'none') {
      return '';
    }

    let fileName = '';

    if (this.fullContent) {
      if (this.isHovered(link)) {
        fileName = link + '_primary_500';
      } else {
        fileName = link + '_primary_700';
      }
    } else {
      if (this.isHovered(link)) {
        fileName = link + '_accent_100';
      } else {
        fileName = link + '_primary_contrast_500';
      }
    }

    return `assets/icons/${fileName}.png`;
  }

  private fillMenu() {
    this.menuItems = [
      {
        img: 'malt',
        text: 'Malt',
        href: 'https://www.malt.fr/profile/antonincharrier',
        target: '_blank'
      },
      {
        img: 'linkedin',
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/antonin-charrier',
        target: '_blank'
      },
      {
        img: 'github',
        text: 'GitHub',
        href: 'https://github.com/antonin-charrier',
        target: '_blank'
      },
      {
        img: 'email',
        text: 'Email me',
        href: 'mailto: contact@antonin-charrier.com',
        target: '_blank'
      }
    ];

    console.log(window.location);
    if (this.locale && this.locale === 'en-GB') {
      this.menuItems.push({
        img: 'croissant',
        text: 'En français',
        href: `${window.location.origin}/fr-FR`,
        target: '_self'
      });
    } else {
      this.menuItems.push({
        img: 'tea',
        text: 'In English',
        href: `${window.location.origin}/en-GB`,
        target: '_self'
      });
    }
  }
}