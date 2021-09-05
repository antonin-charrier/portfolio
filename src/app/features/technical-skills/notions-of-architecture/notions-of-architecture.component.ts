import { Component } from '@angular/core';

@Component({
  selector: 'app-notions-of-architecture',
  templateUrl: './notions-of-architecture.component.html',
  styleUrls: ['./notions-of-architecture.component.scss']
})
export class NotionsOfArchitectureComponent {
  get linkedProjects() {
    return ['vision-safety', 'web-agent', 'e-monthly'];
  }

  get linkedTechnicalSkills() {
    return ['front-end', 'android'];
  }
}
