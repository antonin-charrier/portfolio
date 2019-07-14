import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-knowledge-sharing',
  templateUrl: './knowledge-sharing.component.html',
  styleUrls: ['./knowledge-sharing.component.scss']
})
export class KnowledgeSharingComponent extends ArticleComponent {
  get linkedProjects() {
    return ['web-agent', 'call-center'];
  }

  get linkedTechnicalSkills() {
    return ['front-end'];
  }
}
