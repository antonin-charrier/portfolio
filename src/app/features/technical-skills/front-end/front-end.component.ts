import { Component } from '@angular/core';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent {
  get linkedProjects() {
    return ['web-agent', 'call-center', 'e-monthly', 'galt'];
  }

  get linkedHumanSkills() {
    return ['creativity'];
  }

  get linkedTechnicalSkills() {
    return ['notions-of-architecture'];
  }
}
