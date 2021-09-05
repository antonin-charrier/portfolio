import { Component } from '@angular/core';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent {
  get linkedProjects() {
    return ['vision-safety', 'web-agent'];
  }

  get linkedTechnicalSkills() {
    return ['notions-of-architecture'];
  }
}
