import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redirects',
  templateUrl: './redirects.component.html',
  styleUrls: ['./redirects.component.scss']
})
export class RedirectsComponent {
  @Input() linkedProjects: string[] = [];
  @Input() linkedTechnicalSkills: string[] = [];
  @Input() linkedHumanSkills: string[] = [];

  get isProjectsEmpty(): boolean {
      return this.linkedProjects.length === 0;
  }

  get isTechnicalSkillsEmpty(): boolean {
      return this.linkedTechnicalSkills.length === 0;
  }

  get isHumanSkillsEmpty(): boolean {
      return this.linkedHumanSkills.length === 0;
  }

  isProjectLinked(project: string): boolean {
      return this.linkedProjects.some(p => p === project);
  }

  isTechnicalSkillLinked(technicalSkill: string): boolean {
      return this.linkedTechnicalSkills.some(ts => ts === technicalSkill);
  }

  isHumanSkillLinked(humanSkill: string): boolean {
      return this.linkedHumanSkills.some(hs => hs === humanSkill);
  }
}
