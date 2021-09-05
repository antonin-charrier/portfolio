import { Component } from '@angular/core';

@Component({
  selector: 'app-autonomy',
  templateUrl: './autonomy.component.html',
  styleUrls: ['./autonomy.component.scss']
})
export class AutonomyComponent {
  get linkedProjects() {
    return ['call-center', 'web-agent', 'vision-safety'];
  }
}
