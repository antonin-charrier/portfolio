
import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent, merge } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';
import { NEXT } from '../util/rxjs';

@UntilDestroy()
@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[mouse-still]',
})
export class MouseStillDirective implements OnInit {
	@Input()
	delay = 1500;

	@Output('mouse-still') stillEvent = new EventEmitter();
  private isOver = false;

	constructor(private readonly element: ElementRef) {}

	ngOnInit() {
		const move$ = fromEvent(this.element.nativeElement, 'mousemove');
		const still$ = NEXT.pipe(delay(this.delay));

		fromEvent(this.element.nativeElement, 'mouseleave')
      .pipe(tap(() => this.isOver = false), untilDestroyed(this)).subscribe();
		fromEvent(this.element.nativeElement, 'mouseover')
      .pipe(tap(() => this.isOver = true), untilDestroyed(this)).subscribe();

    merge(move$, still$)
			.pipe(
				untilDestroyed(this),
				switchMap(() => still$)
			)
			.subscribe(() => {
        if (this.isOver) {
          this.stillEvent.emit()
        }
      });
	}
}
