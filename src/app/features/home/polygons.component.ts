import { Location } from '@angular/common';
import { Component, HostBinding, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, pairwise, map, share } from 'rxjs/operators'
import { LinksService } from 'src/app/core/services/links.service';
import { PolygonsAnimations } from './polygons.animations';

@Component({
  selector: 'app-polygons',
  templateUrl: './polygons.component.html',
  styleUrls: ['./polygons.component.scss'],
  animations: [
    PolygonsAnimations
  ]
})
export class PolygonsComponent implements AfterViewInit {
  @HostBinding("style.--menuPaddingRight")
  public menuPaddingRight: string = '50px';
  public isBeingAnimated = false;
  public isMenuDisplayed = false;
  public currentDisplay: CurrentDisplay = 'default';
  public linkChange$: Observable<number>;
  public next$: Observable<number>;
  public prev$: Observable<number>;
  public routeTrigger$: Observable<object>;
  public navItems : { link: string, text: string }[];

  constructor(
    private router: Router,
    private location: Location,
    private detector: ChangeDetectorRef,
    private linksService: LinksService
  ) {
    this.linkChange$ = this.linksService.linkChange$;
    this.navItems = this.linksService.navItems;
    this.prev$ = this.linkChange$.pipe(
      map(index => index === 0 ? index : index - 1),
      share()
    );
    this.next$ = this.linkChange$.pipe(
      map(index => index === this.navItems.length - 1 ? index : index + 1),
      share()
    );

    this.routeTrigger$ = this.linkChange$.pipe(
      startWith(0),
      pairwise(),
      map(([prev, curr]) => ({
        value: curr,
        params: {
          enter: prev > curr ? 'min(-100vh, -100%)' : 'max(100vh, 100%)',
          leave: prev > curr ? 'max(100vh, 100%)' : 'min(-100vh, -100%)'
        }
      })),
    );
  }

  ngAfterViewInit(): void {
    const currentRoute = this.location.path();
    if (currentRoute && currentRoute !== '/') {
      this.linkClick(currentRoute);
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

  public linkClick(link: string) {
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
}

export type CurrentDisplay = 'default' | 'background' | 'main' | 'full-content';
export interface NavItem {
  link: string;
  text: string;
}
