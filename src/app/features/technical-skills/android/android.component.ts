import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent extends ArticleComponent {
  get linkedProjects() {
    return ['vision-safety', 'web-agent'];
  }

  get linkedTechnicalSkills() {
    return ['notions-of-architecture'];
  }
}
