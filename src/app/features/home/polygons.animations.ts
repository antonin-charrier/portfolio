import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const duration = {
  defaultMain1: 55,
  defaultMain2: 95,
  mainFull1: 170,
  mainFull2: 30,
  bgDefaultTotal: 150,
}

// Mode 'background'
const bgBackgroundClipPath =
  'polygon(5% 0, 100% 0, 100% 100%, 0% 100%, 0% 5%)';
const contentBackgroundClipPathAndShapeOutside = 'polygon(0 0, 0 0, 0 100%, 0 100%)';

// Mode 'default'
const bgDefaultClipPath =
  'polygon(40% 0, 100% 0, 100% 100%, 0% 100%, 0% 60%)';
const bgDefaultShapeOutside =
  'polygon(calc(40% - var(--menuPaddingRight)) 0, 100% 0,' +
  '100% 100%, 0% 100%, calc(0% - var(--menuPaddingRight)) 60%)';
const contentDefaultClipPathAndShapeOutside = 'polygon(0 0, 40% 0, 0 60%, 0 60%)';

// Intermediate between mode 'default' and mode 'main'
const bgDefaultMainInterClipPath =
  'polygon(45% 0, 100% 0, 100% 100%, 0% 100%, 0% 100%)';
const bgDefaultMainInterShapeOutside =
  'polygon(calc(45% - var(--menuPaddingRight)) 0, 100% 0, 100% 100%,' +
  'calc(0% - var(--menuPaddingRight)) 100%, calc(0% - var(--menuPaddingRight)) 100%)';
const contentDefaultMainInterClipPathAndShapeOutside = 'polygon(0 0, 50% 0, 0% 100%, 0 100%)';

// Mode 'main'
const bgMainClipPath =
  'polygon(50% 0, 100% 0, 100% 100%, 40% 100%, 40% 100%)';
const bgMainShapeOutside =
  'polygon(calc(50% - var(--menuPaddingRight)) 0, 100% 0, 100% 100%,' +
  'calc(40% - var(--menuPaddingRight)) 100%, calc(40% - var(--menuPaddingRight)) 100%)';
const contentMainClipPathAndShapeOutside = 'polygon(0 0, 60% 0, 40% 100%, 0 100%)';

// Intermediate between mode 'main' and mode 'full-content'
const bgMainFullInterClipPath =
  'polygon(100% 0, 110% 0, 100% 100%, 90% 100%, 90% 100%)';
const bgMainFullInterShapeOutside =
  'polygon(calc(100% - var(--menuPaddingRight)) 0,' +
  'calc(110% - var(--menuPaddingRight)) 0, calc(100% - var(--menuPaddingRight)) 100%,' +
  'calc(90% - var(--menuPaddingRight)) 100%, calc(90% - var(--menuPaddingRight)) 100%)';
const contentFullInterClipPathAndShapeOutside = 'polygon(0 0, 100% 0, 80% 100%, 0 100%)';

// Mode 'full-content'
const bgFullClipPath =
  'polygon(110% 0, 120% 0, 110% 100%, 100% 100%, 100% 100%)';
const bgFullShapeOutside =
  'polygon(calc(110% - var(--menuPaddingRight)) 0,' +
  'calc(120% - var(--menuPaddingRight)) 0, calc(110% - var(--menuPaddingRight)) 100%,' +
  'calc(100% - var(--menuPaddingRight)) 100%, calc(100% - var(--menuPaddingRight)) 100%)';
const contentFullClipPathAndShapeOutside = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

const bgDefaultToMainTransition = [
  style({
    clipPath: bgDefaultClipPath,
    shapeOutside: bgDefaultShapeOutside
  }),
  animate(duration.defaultMain1 + 'ms linear',
  style({
    clipPath: bgDefaultMainInterClipPath,
    shapeOutside: bgDefaultMainInterShapeOutside
  })),
  animate(duration.defaultMain2 + 'ms linear',
  style({
    clipPath: bgMainClipPath,
    shapeOutside: bgMainShapeOutside
  }))
];
const contentDefaultToMainTransition = [
  style({
    clipPath: contentDefaultClipPathAndShapeOutside,
    shapeOutside: contentDefaultClipPathAndShapeOutside
  }),
  animate(duration.defaultMain1 + 'ms linear',
  style({
    clipPath: contentDefaultMainInterClipPathAndShapeOutside,
    shapeOutside: contentDefaultMainInterClipPathAndShapeOutside
  })),
  animate(duration.defaultMain2 + 'ms linear',
  style({
    clipPath: contentMainClipPathAndShapeOutside,
    shapeOutside: contentMainClipPathAndShapeOutside
  }))
];
const bgMainToDefaultTransition = [
  style({
    clipPath: bgMainClipPath,
    shapeOutside: bgMainShapeOutside
  }),
  animate(duration.defaultMain2 + 'ms linear',
  style({
    clipPath: bgDefaultMainInterClipPath,
    shapeOutside: bgDefaultMainInterShapeOutside
  })),
  animate(duration.defaultMain1 + 'ms linear',
  style({
    clipPath: bgDefaultClipPath,
    shapeOutside: bgDefaultShapeOutside
  }))
];
const contentMainToDefaultTransition = [
  style({
    clipPath: contentMainClipPathAndShapeOutside,
    shapeOutside: contentMainClipPathAndShapeOutside
  }),
  animate(duration.defaultMain2 + 'ms linear',
  style({
    clipPath: contentDefaultMainInterClipPathAndShapeOutside,
    shapeOutside: contentDefaultMainInterClipPathAndShapeOutside
  })),
  animate(duration.defaultMain1 + 'ms linear',
  style({
    clipPath: contentDefaultClipPathAndShapeOutside,
    shapeOutside: contentDefaultClipPathAndShapeOutside
  }))
];
const bgMainToFullTransition = [
  style({
    clipPath: bgMainClipPath,
    shapeOutside: bgMainShapeOutside
  }),
  animate(duration.mainFull1 + 'ms linear',
  style({
    clipPath: bgMainFullInterClipPath,
    shapeOutside: bgMainFullInterShapeOutside
  })),
  animate(duration.mainFull2 + 'ms linear',
  style({
    clipPath: bgFullClipPath,
    shapeOutside: bgFullShapeOutside
  }))
];
const contentMainToFullTransition = [
  style({
    clipPath: contentMainClipPathAndShapeOutside,
    shapeOutside: contentMainClipPathAndShapeOutside
  }),
  animate(duration.mainFull1 + 'ms linear',
  style({
    clipPath: contentFullInterClipPathAndShapeOutside,
    shapeOutside: contentFullInterClipPathAndShapeOutside
  })),
  animate(duration.mainFull2 + 'ms linear',
  style({
    clipPath: contentFullClipPathAndShapeOutside,
    shapeOutside: contentFullClipPathAndShapeOutside
  }))
];
const bgFullToMainTransition = [
  style({
    clipPath: bgFullClipPath,
    shapeOutside: bgFullShapeOutside
  }),
  animate(duration.mainFull2 + 'ms linear',
  style({
    clipPath: bgMainFullInterClipPath,
    shapeOutside: bgMainFullInterShapeOutside
  })),
  animate(duration.mainFull1 + 'ms linear',
  style({
    clipPath: bgMainClipPath,
    shapeOutside: bgMainShapeOutside
  }))
];
const contentFullToMainTransition = [
  style({
    clipPath: contentFullClipPathAndShapeOutside,
    shapeOutside: contentFullClipPathAndShapeOutside
  }),
  animate(duration.mainFull2 + 'ms linear',
  style({
    clipPath: contentFullInterClipPathAndShapeOutside,
    shapeOutside: contentFullInterClipPathAndShapeOutside
  })),
  animate(duration.mainFull1 + 'ms linear',
  style({
    clipPath: contentMainClipPathAndShapeOutside,
    shapeOutside: contentMainClipPathAndShapeOutside
  }))
];

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
    transition('background <=> default', animate(duration.bgDefaultTotal + 'ms linear'))
  ]),
  trigger('contentExpandShrink', [
    state('main', style({
      clipPath: contentMainClipPathAndShapeOutside,
      shapeOutside: contentMainClipPathAndShapeOutside
    })),
    state('default', style({
      clipPath: contentDefaultClipPathAndShapeOutside,
      shapeOutside: contentDefaultClipPathAndShapeOutside
    })),
    state('background', style({
      clipPath: contentBackgroundClipPathAndShapeOutside,
      shapeOutside: contentBackgroundClipPathAndShapeOutside
    })),
    state('full-content', style({
      clipPath: contentFullClipPathAndShapeOutside,
      shapeOutside: contentFullClipPathAndShapeOutside
    })),
    transition('default => main', contentDefaultToMainTransition),
    transition('main => default', contentMainToDefaultTransition),
    transition('main => full-content', contentMainToFullTransition),
    transition('full-content => main', contentFullToMainTransition),
    transition('background <=> default', animate(duration.bgDefaultTotal + 'ms linear'))
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
