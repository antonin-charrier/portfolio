import { Component, OnInit } from '@angular/core';
import { RouteAnimations } from 'src/app/shared/animations/route-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    RouteAnimations
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
