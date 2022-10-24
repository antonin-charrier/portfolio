import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const animationDuration = {
  enter: 300,
  leave: 300
}

export const RouteAnimations =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute'
        })
      ], { optional: true }),
      query(':enter', [
        style({
          transform: 'scale(0.9)',
          opacity: 0
        })
      ], { optional: true }),
      query(':leave', [
        style({
          transform: 'scale(1)',
          opacity: 1
        })
      ], { optional: true }),
      group([
        query(':leave', [
          animate(animationDuration.enter + 'ms ease-in', style({
            transform: 'scale(0.9)',
            opacity: 0
          }))
        ], { optional: true }),
        query(':enter', [
          animate(animationDuration.enter + 'ms ease-in', style({
            transform: 'scale(0.9)',
            opacity: 0
          })),
          animate(animationDuration.enter + 'ms ease-in', style({
            transform: 'scale(1)',
            opacity: 1
          }))
        ], { optional: true })
      ]),
    ])
  ]);
