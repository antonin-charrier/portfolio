import { animate, animateChild, query, stagger, state, style, transition, trigger, group } from '@angular/animations';

export const cmDuration = {
  bgDefault: 150,
  defaultMain: 150,
  mainFull: 300
}
const mainWidth = '40%';
const cmDefaultLeft = `-70vw`;
const cmBgLeft = `-30vw`;
const cmMainLeft = `-65vw`;
const cmFullLeft = '0%';
const defaultSkew = '30deg';
const mainSkew = '10deg';
const fullSkew = '0deg';

export const HomeAnimations = [
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
      group([
        query("@*", [animateChild()], {optional: true}),
        animate(`${cmDuration.bgDefault}ms ease-in-out`)
      ])
    ]),
    transition('default <=> main', [
      group([
        query("@*", [animateChild()], {optional: true}),
        animate(`${cmDuration.defaultMain}ms ease-in-out`)
      ])
    ]),
    transition('main <=> full-content', [
      group([
        query("@*", [animateChild()], {optional: true}),
        animate(`${cmDuration.mainFull}ms ease-in-out`)
      ])
    ])
  ]),
  trigger('mainSkew', [
    state('background', style({
      width: mainWidth,
      transform: `skew(-${defaultSkew})`
    })),
    state('default', style({
      width: mainWidth,
      transform: `skew(-${defaultSkew})`
    })),
    state('main', style({
      width: mainWidth,
      transform: `skew(-${mainSkew})`
    })),
    state('full-content', style({
      width: `30%`,
      transform: `skew(-${fullSkew})`
    })),
    transition('background <=> default', [
      group([
        query("@*", [animateChild()], {optional: true}),
        animate(`${cmDuration.bgDefault}ms ease-in-out`)
      ])
    ]),
    transition('default <=> main', [
      group([
        query("@*", [animateChild()], {optional: true}),
        animate(`${cmDuration.defaultMain}ms ease-in-out`)
      ])
    ]),
    transition('main <=> full-content', [
      group([
        query("@*", [animateChild()], {optional: true}),
        animate(`${cmDuration.mainFull}ms ease-in-out`)
      ])
    ])
  ]),
  trigger('mainItemsSkew', [
    state('background', style({
      transform: `skew(${defaultSkew})`
    })),
    state('default', style({
      transform: `skew(${defaultSkew})`
    })),
    state('main', style({
      transform: `skew(${mainSkew})`
    })),
    state('full-content', style({
      transform: `skew(${fullSkew})`
    })),
    transition('background <=> default', [
      animate(`${cmDuration.bgDefault}ms ease-in-out`)
    ]),
    transition('default <=> main', [
      animate(`${cmDuration.defaultMain}ms ease-in-out`)
    ]),
    transition('main <=> full-content', [
      animate(`${cmDuration.mainFull / 5}ms ease-in-out`)
    ])
  ]),
  trigger('routeSlide', [
    transition('* <=> *', [
      group([
        query(':enter', [
          style({transform: 'translateY({{ enter }})'}),
          animate('.3s ease-in-out', style({transform: 'translateY(0%)'}))
        ], {optional: true}),
        query(':leave', [
          style({transform: 'translateY(0%)'}),
          animate('.3s ease-in-out', style({transform: 'translateY({{ leave }})'}))
        ], {optional: true}),
      ])
    ]),
  ]),
  trigger('navMenuDisplay', [
    transition('* => *', [
      query(':leave', [
        style({
          opacity: 1,
          transform: 'translateX(0)'
        }),
        stagger('.08s ease-in-out', animate('.1s ease-in-out', style({
          opacity: 0,
          transform: 'translateX(-100px)'
        })))
      ], { optional: true }),
      query(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        stagger('.08s ease-in-out', animate('.1s ease-in-out', style({
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
         animate('.2s ease-in-out', style({
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
  ]),
  trigger('burgerMenu', [
    transition(':enter', [
      style({
        right: '-20px'
      }),
      animate('.3s ease-out', style({
        right: '50px'
      }))
    ]),
    transition(':leave', [
      style({
        right: '50px'
      }),
      animate('.3s ease-out', style({
        right: '-20px'
      }))
    ])
  ])
];
