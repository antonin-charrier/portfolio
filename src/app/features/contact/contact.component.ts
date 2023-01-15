import { Component } from '@angular/core';
import { RouteComponent } from 'src/app/shared/components/route/route.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './../../shared/components/route/route.component.scss',
    './contact.component.scss'
  ]
})
export class ContactComponent extends RouteComponent {}
