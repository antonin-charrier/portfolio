import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-creativity',
  templateUrl: './creativity.component.html',
  styleUrls: ['./creativity.component.scss']
})
export class CreativityComponent extends ArticleComponent {
  get linkedProjects() {
    return ['vision-safety'];
  }}
