import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-web-agent',
  templateUrl: './web-agent.component.html',
  styleUrls: ['./web-agent.component.scss']
})
export class WebAgentComponent extends ArticleComponent {
  get linkedTechnicalSkills() {
    return ['android', 'front-end', 'dot-net-core-web-api', 'financial-assessments'];
  }

  get linkedHumanSkills() {
    return ['knowledge-sharing'];
  }
}
