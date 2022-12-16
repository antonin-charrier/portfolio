import { animate, animateChild, group, query, sequence, stagger, style, transition, trigger } from '@angular/animations';

export const animationDuration = {
  enter: 3000,
  leave: 3000
}

export const RouteAnimations =
  trigger('routeAnimations', [
    transition('contactPage <=> aboutPage', [
      // style({ }),
      // query(':enter, :leave', [
      //   style({
      //   })
      // ]),
      // query(':enter', [
      //   style({

      //   })
      // ]),
      query('@routeAnimation', [
        animateChild()
      ]),
      // group([
      //   query(':leave', [
      //     animate('3000ms ease-out', style({

      //     }))
      //   ]),
      //   query(':enter', [
      //     animate('3000ms ease-out', style({

      //     }))
      //   ])
      // ]),
    ])
  ]);

export const RouteAnimation =
  trigger('routeAnimation', [
    transition(':enter', [
      style({
        transform: 'scale(1%)',
        scale: '0,1',
        opacity: '0%'
      }),
      // animate('3000ms ease-out', style({
      //   transform: 'scale(100%)',
      //   scale: '1',
      //   opacity: '100%'
      // }))
    ]),
    transition(':leave', [
      style({
        transform: 'scale(100%)',
        scale: '1',
        opacity: '100%'
      }),
      // animate('3000ms ease-out', style({
      //   transform: 'scale(1%)',
      //   scale: '0,1',
      //   opacity: '0%'
      // }))
    ]),
  ]);
