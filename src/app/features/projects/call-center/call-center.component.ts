import { Component } from '@angular/core';

@Component({
  selector: 'app-call-center',
  templateUrl: './call-center.component.html',
  styleUrls: ['./call-center.component.scss']
})
export class CallCenterComponent {
  get linkedTechnicalSkills() {
    return ['front-end'];
  }

  get linkedHumanSkills() {
    return ['autonomy', 'knowledge-sharing', 'team-leading'];
  }
}
