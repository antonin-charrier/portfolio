import { Component } from '@angular/core';

@Component({
  selector: 'app-e-monthly',
  templateUrl: './e-monthly.component.html',
  styleUrls: ['./e-monthly.component.scss']
})
export class EMonthlyComponent {
  get linkedTechnicalSkills() {
    return ['front-end', 'notions-of-architecture'];
  }
}
