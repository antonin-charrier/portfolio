import { Component } from '@angular/core';

@Component({
  selector: 'app-galt',
  templateUrl: './galt.component.html',
  styleUrls: ['./galt.component.scss']
})
export class GaltComponent {
  get linkedTechnicalSkills() {
    return ['front-end', 'dot-net-core-web-api'];
  }
}
