import { Component, OnInit } from '@angular/core';
import { RouteAnimations } from 'src/app/shared/animations/route-animations';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss'],
  animations: [
    RouteAnimations
  ]
})
export class HobbiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
