import { Component, OnInit } from '@angular/core';
import { RouteAnimations } from 'src/app/shared/animations/route-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    RouteAnimations
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
