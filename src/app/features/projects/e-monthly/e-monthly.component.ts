import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-e-monthly',
  templateUrl: './e-monthly.component.html',
  styleUrls: ['./e-monthly.component.scss']
})
export class EMonthlyComponent extends ArticleComponent {
  get linkedTechnicalSkills() {
    return ['front-end', 'notions-of-architecture', 'android'];
  }

  get linkedProjects() {
    return ['vision-safety', 'web-agent', 'call-center', 'e-monthly'];
  }

  get linkedHumanSkills() {
    return ['autonomy', 'creativity', 'languages', 'knowledge-sharing'];
  }
}
