import { Component } from '@angular/core';

@Component({
  selector: 'app-team-leading',
  templateUrl: './team-leading.component.html',
  styleUrls: ['./team-leading.component.scss']
})
export class TeamLeadingComponent {
  get linkedProjects() {
    return ['call-center'];
  }
}
