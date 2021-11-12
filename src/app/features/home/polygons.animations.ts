import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

const bgPolygonDefault = 'polygon(80% 0, 100% 0, 100% 100%, 0% 100%, 0 80%)';
const bgPolygonBackground = 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%, 0 5%)';
const bgPolygonMainInter = 'polygon(80% 0, 100% 0, 100% 100%, 0% 100%, 0 100%)';
const bgPolygonMain = 'polygon(90% 0, 100% 0, 100% 100%, 80% 100%, 80% 100%)';
const bgPolygonShrinked = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)';

const defaultToMainTransition = [
  style({
    clipPath: bgPolygonDefault,
    shapeOutside: bgPolygonDefault
  }),
  animate('.05s linear',
  style({
    clipPath: bgPolygonMainInter,
    shapeOutside: bgPolygonMainInter
  })),
  animate('.15s linear',
  style({
    clipPath: bgPolygonMain,
    shapeOutside: bgPolygonMain
  }))
];
const mainToDefaultTransition = [
  style({
    clipPath: bgPolygonMain,
    shapeOutside: bgPolygonMain
  }),
  animate('.15s linear',
  style({
    clipPath: bgPolygonMainInter,
    shapeOutside: bgPolygonMainInter
  })),
  animate('.05s linear',
  style({
    clipPath: bgPolygonDefault,
    shapeOutside: bgPolygonDefault
  }))
];

export const PolygonsAnimations = [
  trigger('bgPolygonExpandShrink', [
    state('main', style({
      clipPath: bgPolygonMain,
      shapeOutside: bgPolygonMain
    })),
    state('default', style({
      clipPath: bgPolygonDefault,
      shapeOutside: bgPolygonDefault
    })),
    state('background', style({
      clipPath: bgPolygonBackground,
      shapeOutside: bgPolygonBackground
    })),
    state('hover-content', style({
      clipPath: bgPolygonMain,
      shapeOutside: bgPolygonMain
    })),
    state('full-content', style({
      clipPath: bgPolygonShrinked,
      shapeOutside: bgPolygonShrinked
    })),
    transition('default => main', defaultToMainTransition),
    transition('main => default', mainToDefaultTransition),
    transition('background <=> default', animate('.3s linear')),
    transition('hover-content <=> main', animate('.1s linear')),
    transition('full-content <=> hover-content', animate('.1s linear'))
  ]),
  trigger('navMenuDisplay', [
    transition('* => *', [
      query(':leave', [
        style({
          opacity: 1,
          transform: 'translateX(0)'
        }),
        stagger('.05s linear', animate('.1s linear', style({
          opacity: 0,
          transform: 'translateX(-100px)'
        })))
      ], { optional: true }),
      query(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        stagger('.05s linear', animate('.1s linear', style({
          opacity: 1,
          transform: 'translateX(0)'
        })))
      ], { optional: true })
    ])
  ])
];
