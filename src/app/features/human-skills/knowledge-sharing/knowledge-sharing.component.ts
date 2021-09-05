import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge-sharing',
  templateUrl: './knowledge-sharing.component.html',
  styleUrls: ['./knowledge-sharing.component.scss']
})
export class KnowledgeSharingComponent {
  get linkedProjects() {
    return ['web-agent', 'call-center'];
  }

  get linkedTechnicalSkills() {
    return ['front-end'];
  }
}
