import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  linkedProjects: string[] = [];
  linkedTechnicalSkills: string[] = [];
  linkedHumanSkills: string[] = [];

  onActivate(component: any) {
    this.linkedProjects = component.linkedProjects ? component.linkedProjects : [];
    this.linkedTechnicalSkills = component.linkedTechnicalSkills ? component.linkedTechnicalSkills : [];
    this.linkedHumanSkills = component.linkedHumanSkills ? component.linkedHumanSkills : [];
  }
}
