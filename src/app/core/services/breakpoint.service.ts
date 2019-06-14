import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  public breakpoint: string;

  public detectHandsetPortrait(observer: BreakpointObserver, callback?: Function) {
    observer.observe([
      Breakpoints.Handset,
      Breakpoints.TabletPortrait
    ]).subscribe(result => {
      if (result.matches) {
        callback.call(undefined);
      }
    });
  }
}
