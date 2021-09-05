import { Component } from '@angular/core';

@Component({
  selector: 'app-dot-net-core-web-api',
  templateUrl: './dot-net-core-web-api.component.html',
  styleUrls: ['./dot-net-core-web-api.component.scss']
})
export class DotNetCoreWebApiComponent {
  get linkedProjects() {
    return ['web-agent', 'e-monthly', 'call-center', 'galt'];
  }

  get linkedTechnicalSkills() {
    return ['front-end'];
  }
}
