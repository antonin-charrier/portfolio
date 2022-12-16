import { Component, HostBinding, Input } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { RouteAnimation } from '../../animations/route-animations';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
  animations: [
    RouteAnimation
  ]
})
export class RouteComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;

  constructor(
    private contexts: ChildrenOutletContexts
  ) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
