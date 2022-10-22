import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

const backgroundDefaultClipPath =
  'polygon(40% 0, 100% 0, 100% 100%, 0% 100%, 0% 60%)';
const backgroundExpandedClipPath =
  'polygon(5% 0, 100% 0, 100% 100%, 0% 100%, 0% 5%)';
const backgroundMainInterClipPath =
  'polygon(45% 0, 100% 0, 100% 100%, 0% 100%, 0% 100%)';
const backgroundMainClipPath =
  'polygon(50% 0, 100% 0, 100% 100%, 40% 100%, 40% 100%)';
const backgroundShrinkedClipPath =
  'polygon(100% 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)';

const backgroundDefaultShapeOutside =
  'polygon(calc(40% - var(--menuPaddingRight)) 0, 100% 0, 100% 100%, 0% 100%, calc(0% - var(--menuPaddingRight)) 60%)';
const backgroundMainInterShapeOutside =
  'polygon(calc(45% - var(--menuPaddingRight)) 0, 100% 0, 100% 100%, calc(0% - var(--menuPaddingRight)) 100%, calc(0% - var(--menuPaddingRight)) 100%)';
const backgroundMainShapeOutside =
  'polygon(calc(50% - var(--menuPaddingRight)) 0, 100% 0, 100% 100%, calc(40% - var(--menuPaddingRight)) 100%, calc(40% - var(--menuPaddingRight)) 100%)';
const backgroundShrinkedShapeOutside =
  'polygon(calc(100% - var(--menuPaddingRight)) 0, calc(100% - var(--menuPaddingRight)) 0, calc(100% - var(--menuPaddingRight)) 100%, calc(100% - var(--menuPaddingRight)) 100%, calc(100% - var(--menuPaddingRight)) 100%)';


const contentShrinkedClipPath = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
const contentHoverInterClipPath = 'polygon(0 0, 20% 0, 0% 100%, 0 100%)';
const contentHoverClipPath = 'polygon(0 0, 60% 0, 40% 100%, 0 100%)';
const contentFullInterClipPath = 'polygon(0 0, 100% 0, 80% 100%, 0 100%)';
const contentFullClipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

const backgroundDefaultToMainTransition = [
  style({
    clipPath: backgroundDefaultClipPath,
    shapeOutside: backgroundDefaultShapeOutside
  }),
  animate('.1s linear',
  style({
    clipPath: backgroundMainInterClipPath,
    shapeOutside: backgroundMainInterShapeOutside
  })),
  animate('.15s linear',
  style({
    clipPath: backgroundMainClipPath,
    shapeOutside: backgroundMainShapeOutside
  }))
];
const backgroundMainToDefaultTransition = [
  style({
    clipPath: backgroundMainClipPath,
    shapeOutside: backgroundMainShapeOutside
  }),
  animate('.15s linear',
  style({
    clipPath: backgroundMainInterClipPath,
    shapeOutside: backgroundMainInterShapeOutside
  })),
  animate('.1s linear',
  style({
    clipPath: backgroundDefaultClipPath,
    shapeOutside: backgroundDefaultShapeOutside
  }))
];
const contentShrinkedToHoverTransition = [
  style({
    clipPath: contentShrinkedClipPath,
    shapeOutside: contentShrinkedClipPath
  }),
  animate('.05s linear',
  style({
    clipPath: contentHoverInterClipPath,
    shapeOutside: contentHoverInterClipPath
  })),
  animate('.15s linear',
  style({
    clipPath: contentHoverClipPath,
    shapeOutside: contentHoverClipPath
  }))
];
const contentHoverToShrinkedTransition = [
  style({
    clipPath: contentHoverClipPath,
    shapeOutside: contentHoverClipPath
  }),
  animate('.15s linear',
  style({
    clipPath: contentHoverInterClipPath,
    shapeOutside: contentHoverInterClipPath
  })),
  animate('.05s linear',
  style({
    clipPath: contentShrinkedClipPath,
    shapeOutside: contentShrinkedClipPath
  }))
];
const contentHoverToFullTransition = [
  style({
    clipPath: contentHoverClipPath,
    shapeOutside: contentHoverClipPath
  }),
  animate('.25s linear',
  style({
    clipPath: contentFullInterClipPath,
    shapeOutside: contentFullInterClipPath
  })),
  animate('.05s linear',
  style({
    clipPath: contentFullClipPath,
    shapeOutside: contentFullClipPath
  }))
];
const contentFullToHoverTransition = [
  style({
    clipPath: contentFullClipPath,
    shapeOutside: contentFullClipPath
  }),
  animate('.05s linear',
  style({
    clipPath: contentFullInterClipPath,
    shapeOutside: contentFullInterClipPath
  })),
  animate('.25s linear',
  style({
    clipPath: contentHoverClipPath,
    shapeOutside: contentHoverClipPath
  }))
];

export const PolygonsAnimations = [
  trigger('backgroundExpandShrink', [
    state('main', style({
      clipPath: backgroundMainClipPath,
      shapeOutside: backgroundMainShapeOutside
    })),
    state('default', style({
      clipPath: backgroundDefaultClipPath,
      shapeOutside: backgroundDefaultShapeOutside
    })),
    state('background', style({
      clipPath: backgroundExpandedClipPath,
      shapeOutside: backgroundExpandedClipPath
    })),
    state('hover-content', style({
      clipPath: backgroundMainClipPath,
      shapeOutside: backgroundMainShapeOutside
    })),
    state('full-content', style({
      clipPath: backgroundShrinkedClipPath,
      shapeOutside: backgroundShrinkedShapeOutside
    })),
    transition('default => main', backgroundDefaultToMainTransition),
    transition('main => default', backgroundMainToDefaultTransition),
    transition('background <=> default', animate('.3s linear')),
    transition('hover-content <=> main', animate('.1s linear')),
    transition('full-content <=> hover-content', animate('.1s linear'))
  ]),
  trigger('contentExpandShrink', [
    state('main', style({
      clipPath: contentShrinkedClipPath,
      shapeOutside: contentShrinkedClipPath
    })),
    state('default', style({
      clipPath: contentShrinkedClipPath,
      shapeOutside: contentShrinkedClipPath
    })),
    state('background', style({
      clipPath: contentShrinkedClipPath,
      shapeOutside: contentShrinkedClipPath
    })),
    state('hover-content', style({
      clipPath: contentHoverClipPath,
      shapeOutside: contentHoverClipPath
    })),
    state('full-content', style({
      clipPath: contentFullClipPath,
      shapeOutside: contentFullClipPath
    })),
    transition('hover-content => full-content', contentHoverToFullTransition),
    transition('full-content => hover-content', contentFullToHoverTransition),
    transition('hover-content => main', contentHoverToShrinkedTransition),
    transition('main => hover-content', contentShrinkedToHoverTransition),
    transition('background <=> default', animate('.3s linear')),
    transition('main <=> default', animate('.1s linear'))
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
