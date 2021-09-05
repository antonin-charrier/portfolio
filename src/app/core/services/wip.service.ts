import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WipService {
  private static prodRoutes: string[] = [
    '/',
    '/projects',
    '/projects/vision-safety',
    '/projects/call-center',
    '/projects/e-monthly',
    '/projects/galt',
    '/projects/web-agent',
    '/technical-skills',
    '/technical-skills/front-end',
    '/technical-skills/android',
    '/technical-skills/dot-net-core-web-api',
    '/technical-skills/notions-of-architecture',
    '/technical-skills/financial-assessments',
    '/human-skills',
    '/human-skills/autonomy',
    '/human-skills/team-leading',
    '/human-skills/creativity',
    '/human-skills/knowledge-sharing',
    '/human-skills/languages',
    '/career',
    '/hobbies',
    '/about'
  ];

  public static isWip(route: string): boolean {
    return environment.production && !this.prodRoutes.includes(route);
  }
}
