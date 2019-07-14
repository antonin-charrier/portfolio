import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  private _currentDisplay: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public get currentDisplay(): string {
    return this._currentDisplay.value;
  }

  public get breakpoint(): Observable<string> {
    return this._currentDisplay.asObservable();
  }

  public detectBreakpoints(observer: BreakpointObserver) {
    this.detectHandsetPortrait(observer);
    this.detectHandsetLandscape(observer);
    this.detectTabletPortrait(observer);
    this.detectTabletLandscape(observer);
    this.detectWebPortrait(observer);
    this.detectWebLandscape(observer);
  }

  private detectHandsetPortrait(observer: BreakpointObserver) {
    observer.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this._currentDisplay.next(Breakpoints.HandsetPortrait);
      }
    });
  }

  private detectHandsetLandscape(observer: BreakpointObserver) {
    observer.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this._currentDisplay.next(Breakpoints.HandsetLandscape);
      }
    });
  }

  private detectTabletPortrait(observer: BreakpointObserver) {
    observer.observe([
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this._currentDisplay.next(Breakpoints.TabletPortrait);
      }
    });
  }

  private detectTabletLandscape(observer: BreakpointObserver) {
    observer.observe([
      Breakpoints.TabletLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this._currentDisplay.next(Breakpoints.TabletLandscape);
      }
    });
  }

  private detectWebPortrait(observer: BreakpointObserver) {
    observer.observe([
      Breakpoints.WebPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this._currentDisplay.next(Breakpoints.WebPortrait);
      }
    });
  }

  private detectWebLandscape(observer: BreakpointObserver) {
    observer.observe([
      Breakpoints.WebLandscape
    ]).subscribe(result => {
      if (result.matches) {
        this._currentDisplay.next(Breakpoints.WebLandscape);
      }
    });
  }
}
