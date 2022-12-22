import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const hoveredTransformX = 8;
export const openTransformX = 100;
export const closedWidth = 30;
export const openWidth = 300;
export const closedHeight = 5;
export const openMiddleHeight = 400;
export const skew = 10;

export const MenuAnimations = [
  trigger('topMenu', [
    state('closed', style({
      width: `${closedWidth}px`,
      transform: `translateX(0)`
    })),
    state('hovered', style({
      width: `${closedWidth}px`,
      transform: `translateX(${-1 * hoveredTransformX}px)`
    })),
    state('open', style({
      width: `${openWidth}px`,
      transform: `translateX(0)`
    })),
    transition('closed => hovered', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${-1 * hoveredTransformX}px)`
      }))
    ]),
    transition('hovered => open', [
      animate('.2s ease-in-out', style({
        width: `${openWidth}px`,
        transform: `translateX(0)`
      }))
    ]),
    transition('open => hovered', [
      animate('.2s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${-1 * hoveredTransformX}px)`
      }))
    ]),
    transition('hovered => closed', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(0)`
      }))
    ])
  ]),
  trigger('middleMenu', [
    state('closed', style({
      width: `${closedWidth}px`,
      height: `${closedHeight}px`,
      transform: `translateX(0)`
    })),
    state('hovered', style({
      width: `${closedWidth}px`,
      height: `${closedHeight}px`,
      transform: `translateX(${-2 * hoveredTransformX}px)`
    })),
    state('open', style({
      width: `${openWidth}px`,
      height: `${openMiddleHeight}px`,
      transform: `translateX(0)`
    })),
    transition('closed => hovered', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        height: `${closedHeight}px`,
        transform: `translateX(${-2 * hoveredTransformX}px)`
      }))
    ]),
    transition('hovered => open', [
      animate('.2s ease-in-out', style({
        width: `${openWidth}px`,
        height: `${openMiddleHeight}px`,
        transform: `translateX(0)`
      }))
    ]),
    transition('open => hovered', [
      animate('.2s ease-in-out', style({
        width: `${closedWidth}px`,
        height: `${closedHeight}px`,
        transform: `translateX(${-2 * hoveredTransformX}px)`
      }))
    ]),
    transition('hovered => closed', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        height: `${closedHeight}px`,
        transform: `translateX(0)`
      }))
    ])
  ]),
  trigger('bottomMenu', [
    state('closed', style({
      width: `${closedWidth}px`,
      transform: `translateX(0)`
    })),
    state('hovered', style({
      width: `${closedWidth}px`,
      transform: `translateX(${-3 * hoveredTransformX}px)`
    })),
    state('open', style({
      width: `${openWidth}px`,
      transform: `translateX(0)`
    })),
    transition('closed => hovered', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${-3 * hoveredTransformX}px)`
      }))
    ]),
    transition('hovered => open', [
      animate('.2s ease-in-out', style({
        width: `${openWidth}px`,
        transform: `translateX(0)`
      }))
    ]),
    transition('open => hovered', [
      animate('.2s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${-3 * hoveredTransformX}px)`
      }))
    ]),
    transition('hovered => closed', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(0)`
      }))
    ])
  ]),
  trigger('linkItems', [
    transition('* => *', [
      query(':enter', [
        style({
          opacity: 0,
          transform: 'skew(10deg) translateX(-50px)'
        }),
        stagger('.15s', [
          animate('.15s', style({
            opacity: 1,
            transform: 'skew(10deg)'
          }))
        ])
      ], { optional: true })
    ])
  ])
];
