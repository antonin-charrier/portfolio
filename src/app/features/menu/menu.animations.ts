import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const baseTransformX = 1;
export const offsetTransformX = 8;

export const MenuAnimations = [
  trigger('topHover', [
    state('true',  style({
      transform: `translateX(${-1 * offsetTransformX}px)`
    })),
    state('false',  style({
      transform: `translateX(${0 * baseTransformX}px)`
    })),
    transition('false => true', [
      animate('.1s ease-in-out', style({
        transform: `translateX(${-1 * offsetTransformX}px)`
      }))
    ]),
    transition('true => false', [
      animate('.1s ease-in-out', style({
        transform: `translateX(${0 * baseTransformX}px)`
      }))
    ])
  ]),
  trigger('middleHover', [
    state('true',  style({
      transform: `translateX(${-2 * offsetTransformX}px)`
    })),
    state('false',  style({
      transform: `translateX(${-1 * baseTransformX}px)`
    })),
    transition('false => true', [
      animate('.1s ease-in-out', style({
        transform: `translateX(${-2 * offsetTransformX}px)`
      }))
    ]),
    transition('true => false', [
      animate('.1s ease-in-out', style({
        transform: `translateX(${-1 * baseTransformX}px)`
      }))
    ])
  ]),
  trigger('bottomHover', [
    state('true',  style({
      transform: `translateX(${-3 * offsetTransformX}px)`
    })),
    state('false',  style({
      transform: `translateX(${-2 * baseTransformX}px)`
    })),
    transition('false => true', [
      animate('.1s ease-in-out', style({
        transform: `translateX(${-3 * offsetTransformX}px)`
      }))
    ]),
    transition('true => false', [
      animate('.1s ease-in-out', style({
        transform: `translateX(${-2 * baseTransformX}px)`
      }))
    ])
  ]),
];
