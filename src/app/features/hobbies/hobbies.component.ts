import { Component } from '@angular/core';
import { RouteComponent } from 'src/app/shared/components/route/route.component';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: [
    './../../shared/components/route/route.component.scss',
    './hobbies.component.scss'
  ]
})
export class HobbiesComponent extends RouteComponent {}
