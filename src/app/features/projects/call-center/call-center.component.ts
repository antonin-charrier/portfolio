import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-call-center',
  templateUrl: './call-center.component.html',
  styleUrls: ['./call-center.component.scss']
})
export class CallCenterComponent extends ArticleComponent {
  get linkedTechnicalSkills() {
    return ['front-end'];
  }

  get linkedHumanSkills() {
    return ['autonomy', 'knowledge-sharing', 'team-leading'];
  }
}
