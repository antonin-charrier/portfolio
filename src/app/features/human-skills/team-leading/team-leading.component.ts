import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-team-leading',
  templateUrl: './team-leading.component.html',
  styleUrls: ['./team-leading.component.scss']
})
export class TeamLeadingComponent extends ArticleComponent {
  get linkedProjects() {
    return ['call-center'];
  }
}
