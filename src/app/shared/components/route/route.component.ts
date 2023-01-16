import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinksService } from 'src/app/core/services/links.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent {
  public currentLink: { link: string, text: string };

  constructor(
    private route: ActivatedRoute,
    private linksService: LinksService
  ) {
    const currentLinkRef = this.route.snapshot.routeConfig?.path;
    this.currentLink = this.linksService.navItems.find(l => l.link === currentLinkRef)
      ?? { link: 'none', text: 'none'};
    const index = this.linksService.navItems.indexOf(this.currentLink);
    this.linksService.linkChange$.next(index);
  }
}
