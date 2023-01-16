import { animate, group, query, style, transition, trigger } from '@angular/animations';

export const ContactAnimations = [
  trigger('email', [
    transition('0 => 1', group([
      query('mat-icon', [
        style({
          transform: 'scale(1.2)',
          opacity: 1
        }),
        animate('.4s ease-in', style({
          transform: 'scale(0.8) translateX(150px)',
          opacity: 0
        })),
        animate('.2s linear', style({
          transform: 'scale(0.8) translateX(-10px)',
          opacity: 0
        })),
        animate('.1s ease-out', style({
          transform: 'scale(1.2)',
          opacity: 1
        }))
      ], {optional: true}),
      query('span', [
        style({
          opacity: 1
        }),
        animate('.1s ease-in-out', style({
          opacity: 0
        })),
        animate('.5s ease-in-out', style({
          opacity: 0
        })),
        animate('.1s ease-in-out', style({
          opacity: 1
        }))
      ], {optional: true})
    ]))
  ])
];
