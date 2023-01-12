import { animate, animateChild, query, stagger, state, style, transition, trigger, group } from '@angular/animations';

//#region Background

export const cmDuration = {
  bgDefault: 50,
  defaultMain: 50,
  mainFull: 200
}
const contentWidth = '70vw';
const mainWidth = '30vw';
const cmDefaultLeft = `calc(-${contentWidth} - 10vw)`;
const cmBgLeft = `calc(-${contentWidth} - ${mainWidth})`;
const cmMainLeft = `-${contentWidth}`;
const cmFullLeft = '0vw';

export const PolygonsAnimations = [
  trigger('contentMainMove', [
    state('background', style({
      left: cmBgLeft
    })),
    state('default', style({
      left: cmDefaultLeft
    })),
    state('main', style({
      left: cmMainLeft
    })),
    state('full-content', style({
      left: cmFullLeft
    })),
    transition('background <=> default', [
      query("@*", [animateChild()], {optional: true}),
      animate(`${cmDuration.bgDefault}ms linear`)
    ]),
    transition('default <=> main', [
      query("@*", [animateChild()], {optional: true}),
      animate(`${cmDuration.defaultMain}ms linear`)
    ]),
    transition('main <=> full-content', [
      query("@*", [animateChild()], {optional: true}),
      animate(`${cmDuration.mainFull}ms linear`)
    ])
  ]),
  trigger('navMenuDisplay', [
    transition('* => *', [
      query(':leave', [
        style({
          opacity: 1,
          transform: 'translateX(0)'
        }),
        stagger('.08s linear', animate('.1s linear', style({
          opacity: 0,
          transform: 'translateX(-100px)'
        })))
      ], { optional: true }),
      query(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        stagger('.08s linear', animate('.1s linear', style({
          opacity: 1,
          transform: 'translateX(0)'
        })))
      ], { optional: true })
    ])
  ]),
  trigger('homeButtonContainer', [
    transition(':enter', [
      style({
        right: '-50px'
      }),
      animate('.15s ease-out', style({
        right: '50px'
      }))
    ]),
    transition(':leave', [
      query('#home-button', [
        style({
          transform: 'scale(1.8)'
        }),
         animate('.2s linear', style({
          transform: 'scale(1.8) rotate(180deg)'
        }))
      ], { optional: true }),
      style({
        right: '50px'
      }),
      animate('.2s ease-out', style({
        right: '-50px'
      }))
    ])
  ])
];
