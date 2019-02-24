import { Component } from '@angular/core';
import { ArticleComponent } from 'src/app/shared/article.component';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.scss']
})
export class FrontEndComponent extends ArticleComponent {}
