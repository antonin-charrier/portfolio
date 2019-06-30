import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent extends ArticleComponent {
  get linkedProjects() {
    return ['web-agent', 'call-center', 'e-monthly', 'galt'];
  }

  get linkedHumanSkills() {
    return ['creativity'];
  }

  get linkedTechnicalSkills() {
    return ['notions-of-architecture'];
  }
}
