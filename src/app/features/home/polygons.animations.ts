import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

//#region Background

export const backgroundDuration = {
  defaultMain1: 55,
  defaultMain2: 95,
  mainFull1: 170,
  mainFull2: 30,
  bgDefaultTotal: 150,
}

// Mode 'background'
const bgBackgroundClipPath =
  'polygon(5% 0, 100% 0, 100% 100%, 0% 100%, 0% 5%)';

// Mode 'default'
const bgDefaultClipPath =
  'polygon(40% 0, 100% 0, 100% 100%, 0% 100%, 0% 60%)';
const bgDefaultShapeOutside =
  'polygon(calc(40% - var(--menuPaddingRight)) 0, 100% 0,' +
  '100% 100%, 0% 100%, calc(0% - var(--menuPaddingRight)) 60%)';

// Intermediate between mode 'default' and mode 'main'
const bgDefaultMainInterClipPath =
  'polygon(45% 0, 100% 0, 100% 100%, 0% 100%, 0% 100%)';
const bgDefaultMainInterShapeOutside =
  'polygon(calc(45% - var(--menuPaddingRight)) 0, 100% 0, 100% 100%,' +
  'calc(0% - var(--menuPaddingRight)) 100%, calc(0% - var(--menuPaddingRight)) 100%)';

// Mode 'main'
const bgMainClipPath =
  'polygon(50% 0, 100% 0, 100% 100%, 40% 100%, 40% 100%)';
const bgMainShapeOutside =
  'polygon(calc(50% - var(--menuPaddingRight)) 0, 100% 0, 100% 100%,' +
  'calc(40% - var(--menuPaddingRight)) 100%, calc(40% - var(--menuPaddingRight)) 100%)';

// Intermediate between mode 'main' and mode 'full-content'
const bgMainFullInterClipPath =
  'polygon(100% 0, 110% 0, 100% 100%, 90% 100%, 90% 100%)';
const bgMainFullInterShapeOutside =
  'polygon(calc(100% - var(--menuPaddingRight)) 0,' +
  'calc(110% - var(--menuPaddingRight)) 0, calc(100% - var(--menuPaddingRight)) 100%,' +
  'calc(90% - var(--menuPaddingRight)) 100%, calc(90% - var(--menuPaddingRight)) 100%)';

// Mode 'full-content'
const bgFullClipPath =
  'polygon(110% 0, 120% 0, 110% 100%, 100% 100%, 100% 100%)';
const bgFullShapeOutside =
  'polygon(calc(110% - var(--menuPaddingRight)) 0,' +
  'calc(120% - var(--menuPaddingRight)) 0, calc(110% - var(--menuPaddingRight)) 100%,' +
  'calc(100% - var(--menuPaddingRight)) 100%, calc(100% - var(--menuPaddingRight)) 100%)';

const bgDefaultToMainTransition = [
  style({
    clipPath: bgDefaultClipPath,
    shapeOutside: bgDefaultShapeOutside
  }),
  animate(backgroundDuration.defaultMain1 + 'ms linear',
  style({
    clipPath: bgDefaultMainInterClipPath,
    shapeOutside: bgDefaultMainInterShapeOutside
  })),
  animate(backgroundDuration.defaultMain2 + 'ms linear',
  style({
    clipPath: bgMainClipPath,
    shapeOutside: bgMainShapeOutside
  }))
];
const bgMainToDefaultTransition = [
  style({
    clipPath: bgMainClipPath,
    shapeOutside: bgMainShapeOutside
  }),
  animate(backgroundDuration.defaultMain2 + 'ms linear',
  style({
    clipPath: bgDefaultMainInterClipPath,
    shapeOutside: bgDefaultMainInterShapeOutside
  })),
  animate(backgroundDuration.defaultMain1 + 'ms linear',
  style({
    clipPath: bgDefaultClipPath,
    shapeOutside: bgDefaultShapeOutside
  }))
];
const bgMainToFullTransition = [
  style({
    clipPath: bgMainClipPath,
    shapeOutside: bgMainShapeOutside
  }),
  animate(backgroundDuration.mainFull1 + 'ms linear',
  style({
    clipPath: bgMainFullInterClipPath,
    shapeOutside: bgMainFullInterShapeOutside
  })),
  animate(backgroundDuration.mainFull2 + 'ms linear',
  style({
    clipPath: bgFullClipPath,
    shapeOutside: bgFullShapeOutside
  }))
];
const bgFullToMainTransition = [
  style({
    clipPath: bgFullClipPath,
    shapeOutside: bgFullShapeOutside
  }),
  animate(backgroundDuration.mainFull2 + 'ms linear',
  style({
    clipPath: bgMainFullInterClipPath,
    shapeOutside: bgMainFullInterShapeOutside
  })),
  animate(backgroundDuration.mainFull1 + 'ms linear',
  style({
    clipPath: bgMainClipPath,
    shapeOutside: bgMainShapeOutside
  }))
];

//#endregion Background

export const PolygonsAnimations = [
  trigger('backgroundExpandShrink', [
    state('main', style({
      clipPath: bgMainClipPath,
      shapeOutside: bgMainShapeOutside
    })),
    state('default', style({
      clipPath: bgDefaultClipPath,
      shapeOutside: bgDefaultShapeOutside
    })),
    state('background', style({
      clipPath: bgBackgroundClipPath,
      shapeOutside: bgBackgroundClipPath
    })),
    state('full-content', style({
      clipPath: bgFullClipPath,
      shapeOutside: bgFullShapeOutside
    })),
    transition('default => main', bgDefaultToMainTransition),
    transition('main => default', bgMainToDefaultTransition),
    transition('main => full-content', bgMainToFullTransition),
    transition('full-content => main', bgFullToMainTransition),
    transition('background <=> default', animate(backgroundDuration.bgDefaultTotal + 'ms linear'))
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
