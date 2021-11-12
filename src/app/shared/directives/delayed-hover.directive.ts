
import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { fromEvent, merge, of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

@UntilDestroy()
@Directive({
	// tslint:disable-next-line:directive-selector
	selector: '[delayed-hover]',
})
export class DelayedHoverDirective implements OnInit {
	@Input() hoverDelay = 1500;
	@Output('delayed-hover') hoverEvent = new EventEmitter();

	constructor(private readonly element: ElementRef) {}

	ngOnInit() {
		const leave$ = fromEvent(this.element.nativeElement, 'mouseleave').pipe(map(_ => false));
		const over$ = fromEvent(this.element.nativeElement, 'mouseover').pipe(map(_ => true));

		merge(leave$, over$)
			.pipe(
				untilDestroyed(this),
				switchMap(isOver => {
					if (!isOver) {
						return of(false);
					}
					return of(true).pipe(delay(this.hoverDelay));
				})
			)
			.subscribe(isOver => {
				if (isOver) {
					this.hoverEvent.emit();
				}
			});
	}
}
