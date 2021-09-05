import { Component } from '@angular/core';

@Component({
  selector: 'app-vision-safety',
  templateUrl: './vision-safety.component.html',
  styleUrls: ['./vision-safety.component.scss']
})
export class VisionSafetyComponent {
  get linkedHumanSkills() {
    return ['autonomy', 'creativity'];
  }

  get linkedTechnicalSkills() {
    return ['android'];
  }
}
