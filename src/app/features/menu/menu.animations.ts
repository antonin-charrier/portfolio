import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const closedTransformX = 1;
export const hoveredTransformX = 8;
export const openBottomTransformX = 100;
export const openMiddleTransformX = 50;
export const openTopTransformY = 500;
export const openMiddleTransformY = 250;
export const closedWidth = 30;
export const openWidth = 300;

export const MenuAnimations = [
  trigger('topMenu', [
    state('closed', style({
      width: `${closedWidth}px`,
      transform: `translateX(${0 * closedTransformX}px) translateY(${0 * openTopTransformY}px)`
    })),
    state('hovered', style({
      width: `${closedWidth}px`,
      transform: `translateX(${-1 * hoveredTransformX}px) translateY(${0 * openTopTransformY}px)`
    })),
    state('open', style({
      width: `${openWidth}px`,
      transform: `translateX(${0 * openBottomTransformX}px) translateY(${-1 * openTopTransformY}px)`
    })),
    transition('closed => hovered', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${-1 * hoveredTransformX}px) translateY(${0 * openTopTransformY}px)`
      }))
    ]),
    transition('hovered => open', [
      animate('.2s ease-in-out', style({
        width: `${openWidth}px`,
        transform: `translateX(${0 * openBottomTransformX}px) translateY(${-1 * openTopTransformY}px)`
      }))
    ]),
    transition('open => hovered', [
      animate('.2s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${-1 * hoveredTransformX}px) translateY(${0 * openTopTransformY}px)`
      }))
    ]),
    transition('hovered => closed', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${0 * closedTransformX}px) translateY(${0 * openTopTransformY}px)`
      }))
    ])
  ]),
  trigger('middleMenu', [
    state('closed', style({
      width: `${closedWidth}px`,
      transform: `translateX(${-1 * closedTransformX}px) translateY(${0 * openMiddleTransformY}px)`
    })),
    state('hovered', style({
      width: `${closedWidth}px`,
      transform: `translateX(${-2 * hoveredTransformX}px) translateY(${0 * openMiddleTransformY}px)`
    })),
    state('open', style({
      width: `${openWidth}px`,
      transform: `translateX(${-1 * openMiddleTransformX}px) translateY(${-1 * openMiddleTransformY}px)`
    })),
    transition('closed => hovered', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${-2 * hoveredTransformX}px) translateY(${0 * openMiddleTransformY}px)`
      }))
    ]),
    transition('hovered => open', [
      animate('.2s ease-in-out', style({
        width: `${openWidth}px`,
        transform: `translateX(${-1 * openMiddleTransformX}px) translateY(${-1 * openMiddleTransformY}px)`
      }))
    ]),
    transition('open => hovered', [
      animate('.2s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${-2 * hoveredTransformX}px) translateY(${0 * openMiddleTransformY}px)`
      }))
    ]),
    transition('hovered => closed', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        transform: `translateX(${-1 * closedTransformX}px) translateY(${0 * openMiddleTransformY}px)`
      }))
    ])
  ]),
  trigger('bottomMenu', [
    state('closed', style({
      width: `${closedWidth}px`,
      transform: `translateX(${-2 * closedTransformX}px)`
    })),
    state('hovered', style({
      width: `${closedWidth}px`,
      transform: `translateX(${-3 * hoveredTransformX}px)`
    })),
    state('open', style({
      width: `${openWidth}px`,
      transform: `translateX(${-1 * openBottomTransformX}px)`
    })),
    transition('closed => hovered', [
      animate('.1s ease-in-out', style({
        transform: `translateX(${-3 * hoveredTransformX}px)`
      }))
    ]),
    transition('hovered => open', [
      animate('.2s ease-in-out', style({
        width: `${openWidth}px`,
        transform: `translateX(${-1 * openBottomTransformX}px)`
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
        transform: `translateX(${-2 * closedTransformX}px)`
      }))
    ])
  ])
];
