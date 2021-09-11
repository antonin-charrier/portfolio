import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const HomeAnimations = [
  trigger('mainExpand', [
    state('expanded', style({
      clipPath: 'polygon(0 0, 0 800%, 90% 0)'
    })),
    state('retracted', style({
      clipPath: 'polygon(0 0, 0 80%, 80% 0)'
    })),
    transition('expanded => retracted', [
      animate('.2s linear')
    ]),
    transition('retracted => expanded', [
      animate('.2s linear')
    ])
  ]),
  trigger('bgExpand', [
    state('expanded', style({
      clipPath: 'polygon(0 0, 0 20%, 20% 0)'
    })),
    state('retracted', style({
      clipPath: 'polygon(0 0, 0 80%, 80% 0)'
    })),
    transition('expanded => retracted', [
      animate('.2s linear')
    ]),
    transition('retracted => expanded', [
      animate('.2s linear')
    ])
  ])
]
