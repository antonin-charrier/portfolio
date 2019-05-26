import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-autonomy',
  templateUrl: './autonomy.component.html',
  styleUrls: ['./autonomy.component.scss']
})
export class AutonomyComponent  extends ArticleComponent {
  get linkedProjects() {
    return ['web-agent', 'vision-safety'];
  }
}
