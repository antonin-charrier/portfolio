import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-vision-safety',
  templateUrl: './vision-safety.component.html',
  styleUrls: ['./vision-safety.component.scss']
})
export class VisionSafetyComponent extends ArticleComponent {
  get linkedHumanSkills() {
    return ['autonomy', 'creativity'];
  }

  get linkedTechnicalSkills() {
    return ['android'];
  }
}
