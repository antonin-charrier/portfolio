import { Component } from '@angular/core';

@Component({
  selector: 'app-financial-assessments',
  templateUrl: './financial-assessments.component.html',
  styleUrls: ['./financial-assessments.component.scss']
})
export class FinancialAssessmentsComponent {
  get linkedProjects() {
    return ['web-agent'];
  }
}
