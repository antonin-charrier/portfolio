import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

const backgroundDefault = 'polygon(80% 0, 100% 0, 100% 100%, 0% 100%, 0 80%)';
const backgroundExpanded = 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%, 0 5%)';
const backgroundMainInter = 'polygon(80% 0, 100% 0, 100% 100%, 0% 100%, 0 100%)';
const backgroundMain = 'polygon(90% 0, 100% 0, 100% 100%, 80% 100%, 80% 100%)';
const backgroundShrinked = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%, 100% 100%)';

const contentShrinked = 'polygon(0 0, 0 0, 0 100%, 0 100%)';
const contentHoverInter = 'polygon(0 0, 20% 0, 0% 100%, 0 100%)';
const contentHover = 'polygon(0 0, 60% 0, 40% 100%, 0 100%)';
const contentFullInter = 'polygon(0 0, 100% 0, 80% 100%, 0 100%)';
const contentFull = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

const backgroundDefaultToMainTransition = [
  style({
    clipPath: backgroundDefault,
    shapeOutside: backgroundDefault
  }),
  animate('.05s linear',
  style({
    clipPath: backgroundMainInter,
    shapeOutside: backgroundMainInter
  })),
  animate('.15s linear',
  style({
    clipPath: backgroundMain,
    shapeOutside: backgroundMain
  }))
];
const backgroundMainToDefaultTransition = [
  style({
    clipPath: backgroundMain,
    shapeOutside: backgroundMain
  }),
  animate('.15s linear',
  style({
    clipPath: backgroundMainInter,
    shapeOutside: backgroundMainInter
  })),
  animate('.05s linear',
  style({
    clipPath: backgroundDefault,
    shapeOutside: backgroundDefault
  }))
];
const contentShrinkedToHoverTransition = [
  style({
    clipPath: contentShrinked,
    shapeOutside: contentShrinked
  }),
  animate('.05s linear',
  style({
    clipPath: contentHoverInter,
    shapeOutside: contentHoverInter
  })),
  animate('.15s linear',
  style({
    clipPath: contentHover,
    shapeOutside: contentHover
  }))
];
const contentHoverToShrinkedTransition = [
  style({
    clipPath: contentHover,
    shapeOutside: contentHover
  }),
  animate('.15s linear',
  style({
    clipPath: contentHoverInter,
    shapeOutside: contentHoverInter
  })),
  animate('.05s linear',
  style({
    clipPath: contentShrinked,
    shapeOutside: contentShrinked
  }))
];
const contentHoverToFullTransition = [
  style({
    clipPath: contentHover,
    shapeOutside: contentHover
  }),
  animate('.25s linear',
  style({
    clipPath: contentFullInter,
    shapeOutside: contentFullInter
  })),
  animate('.05s linear',
  style({
    clipPath: contentFull,
    shapeOutside: contentFull
  }))
];
const contentFullToHoverTransition = [
  style({
    clipPath: contentFull,
    shapeOutside: contentFull
  }),
  animate('.05s linear',
  style({
    clipPath: contentFullInter,
    shapeOutside: contentFullInter
  })),
  animate('.25s linear',
  style({
    clipPath: contentHover,
    shapeOutside: contentHover
  }))
];

export const PolygonsAnimations = [
  trigger('backgroundExpandShrink', [
    state('main', style({
      clipPath: backgroundMain,
      shapeOutside: backgroundMain
    })),
    state('default', style({
      clipPath: backgroundDefault,
      shapeOutside: backgroundDefault
    })),
    state('background', style({
      clipPath: backgroundExpanded,
      shapeOutside: backgroundExpanded
    })),
    state('hover-content', style({
      clipPath: backgroundMain,
      shapeOutside: backgroundMain
    })),
    state('full-content', style({
      clipPath: backgroundShrinked,
      shapeOutside: backgroundShrinked
    })),
    transition('default => main', backgroundDefaultToMainTransition),
    transition('main => default', backgroundMainToDefaultTransition),
    transition('background <=> default', animate('.3s linear')),
    transition('hover-content <=> main', animate('.1s linear')),
    transition('full-content <=> hover-content', animate('.1s linear'))
  ]),
  trigger('contentExpandShrink', [
    state('main', style({
      clipPath: contentShrinked,
      shapeOutside: contentShrinked
    })),
    state('default', style({
      clipPath: contentShrinked,
      shapeOutside: contentShrinked
    })),
    state('background', style({
      clipPath: contentShrinked,
      shapeOutside: contentShrinked
    })),
    state('hover-content', style({
      clipPath: contentHover,
      shapeOutside: contentHover
    })),
    state('full-content', style({
      clipPath: contentFull,
      shapeOutside: contentFull
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
