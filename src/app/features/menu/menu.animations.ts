import { animate, state, style, transition, trigger } from '@angular/animations';

export const closedClipPath = 3;
export const openMiddleClipPath = 80;
export const closedTransformX = 1;
export const hoveredTransformX = 8;
export const openBottomTransformX = openMiddleClipPath;
export const openMiddleTransformX = 50;
export const openTopTransformY = 500;
export const openMiddleTransformY = 250;
export const closedWidth = 30;
export const openWidth = 300;
export const closedHeight = 5;
export const openMiddleHeight = 500;
export const openMiddleWidth = openWidth + openMiddleClipPath;

export const MenuAnimations = [
  trigger('topMenu', [
    state('closed', style({
      width: `${closedWidth}px`,
      opacity: 1,
      clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
      transform: `translateX(${0 * closedTransformX}px) translateY(${0 * openTopTransformY}px)`
    })),
    state('hovered', style({
      width: `${closedWidth}px`,
      opacity: 1,
      clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
      transform: `translateX(${-1 * hoveredTransformX}px) translateY(${0 * openTopTransformY}px)`
    })),
    state('open', style({
      width: `${openWidth}px`,
      opacity: 0,
      clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
      transform: `translateX(${0 * openBottomTransformX}px) translateY(${0 * openTopTransformY}px)`
    })),
    transition('closed => hovered', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        opacity: 1,
        transform: `translateX(${-1 * hoveredTransformX}px) translateY(${0 * openTopTransformY}px)`
      }))
    ]),
    transition('hovered => open', [
      animate('.2s ease-in-out', style({
        width: `${openWidth}px`,
        opacity: 0,
        transform: `translateX(${0 * openBottomTransformX}px) translateY(${0 * openTopTransformY}px)`
      }))
    ]),
    transition('open => hovered', [
      animate('.2s ease-in-out', style({
        width: `${closedWidth}px`,
        opacity: 1,
        transform: `translateX(${-1 * hoveredTransformX}px) translateY(${0 * openTopTransformY}px)`
      }))
    ]),
    transition('hovered => closed', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        opacity: 1,
        transform: `translateX(${0 * closedTransformX}px) translateY(${0 * openTopTransformY}px)`
      }))
    ])
  ]),
  trigger('middleMenu', [
    state('closed', style({
      width: `${closedWidth}px`,
      height: `${closedHeight}px`,
      clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
      transform: `translateX(${-1 * closedTransformX}px) translateY(${0 * openMiddleTransformY}px)`
    })),
    state('hovered', style({
      width: `${closedWidth}px`,
      height: `${closedHeight}px`,
      clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
      transform: `translateX(${-2 * hoveredTransformX}px) translateY(${0 * openMiddleTransformY}px)`
    })),
    state('open', style({
      width: `${openMiddleWidth}px`,
      height: `${openMiddleHeight}px`,
      clipPath: `polygon(${openMiddleClipPath}px 0, 100% 0, calc(100% - ${openMiddleClipPath}px) 100%, 0 100%)`,
      transform: `translateX(${0 * openMiddleTransformX}px) translateY(${0 * openMiddleTransformY}px)`
    })),
    transition('closed => hovered', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        height: `${closedHeight}px`,
        clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
        transform: `translateX(${-2 * hoveredTransformX}px) translateY(${0 * openMiddleTransformY}px)`
      }))
    ]),
    transition('hovered => open', [
      animate('.2s ease-in-out', style({
        width: `${openMiddleWidth}px`,
        height: `${openMiddleHeight}px`,
        clipPath: `polygon(${openMiddleClipPath}px 0, 100% 0, calc(100% - ${openMiddleClipPath}px) 100%, 0 100%)`,
        transform: `translateX(${0 * openMiddleTransformX}px) translateY(${0 * openMiddleTransformY}px)`
      }))
    ]),
    transition('open => hovered', [
      animate('.2s ease-in-out', style({
        width: `${closedWidth}px`,
        height: `${closedHeight}px`,
        clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
        transform: `translateX(${-2 * hoveredTransformX}px) translateY(${0 * openMiddleTransformY}px)`
      }))
    ]),
    transition('hovered => closed', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        height: `${closedHeight}px`,
        clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
        transform: `translateX(${-1 * closedTransformX}px) translateY(${0 * openMiddleTransformY}px)`
      }))
    ])
  ]),
  trigger('bottomMenu', [
    state('closed', style({
      width: `${closedWidth}px`,
      opacity: 1,
      clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
      transform: `translateX(${-2 * closedTransformX}px)`
    })),
    state('hovered', style({
      width: `${closedWidth}px`,
      opacity: 1,
      clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
      transform: `translateX(${-3 * hoveredTransformX}px)`
    })),
    state('open', style({
      width: `${openWidth}px`,
      opacity: 0,
      clipPath: `polygon(${closedClipPath}px 0, 100% 0%, calc(100% - ${closedClipPath}px) 100%, 0% 100%)`,
      transform: `translateX(${-1 * openBottomTransformX}px)`
    })),
    transition('closed => hovered', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        opacity: 1,
        transform: `translateX(${-3 * hoveredTransformX}px)`
      }))
    ]),
    transition('hovered => open', [
      animate('.2s ease-in-out', style({
        width: `${openWidth}px`,
        opacity: 0,
        transform: `translateX(${-1 * openBottomTransformX}px)`
      }))
    ]),
    transition('open => hovered', [
      animate('.2s ease-in-out', style({
        width: `${closedWidth}px`,
        opacity: 1,
        transform: `translateX(${-3 * hoveredTransformX}px)`
      }))
    ]),
    transition('hovered => closed', [
      animate('.1s ease-in-out', style({
        width: `${closedWidth}px`,
        opacity: 1,
        transform: `translateX(${-2 * closedTransformX}px)`
      }))
    ])
  ])
];
