import { animate, state, style, transition, trigger } from '@angular/animations';

const bgPolygon = 'polygon(80% 0, 100% 0, 100% 100%, 0% 100%, 0 80%)';
const bgPolygonLarge = 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%, 0 15%)';
const bgPolygonSmall = 'polygon(90% 0, 100% 0, 100% 100%, 80% 100%, 80% 100%)';

export const HomeAnimations = [
  trigger('mainExpand', [
    state('expanded', style({
      clipPath: bgPolygonSmall,
      shapeOutside: bgPolygonSmall
    })),
    state('retracted', style({
      clipPath: bgPolygon,
      shapeOutside: bgPolygon
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
      clipPath: bgPolygonLarge,
      shapeOutside: bgPolygonLarge
    })),
    state('retracted', style({
      clipPath: bgPolygon,
      shapeOutside: bgPolygon
    })),
    transition('expanded => retracted', [
      animate('.2s linear')
    ]),
    transition('retracted => expanded', [
      animate('.2s linear')
    ])
  ])
]
