import { Component } from '@angular/core';

@Component({
  selector: 'app-creativity',
  templateUrl: './creativity.component.html',
  styleUrls: ['./creativity.component.scss']
})
export class CreativityComponent {
  get linkedProjects() {
    return ['vision-safety'];
  }

  get linkedTechnicalSkills() {
    return ['front-end'];
  }
}
