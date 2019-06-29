import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WipService {
  private static prodRoutes: string[] = [
    '/',
    '/projects',
    '/projects/call-center',
    '/projects/e-monthly',
    '/projects/galt',
    '/projects/vision-safety',
    '/human-skills',
    '/human-skills/autonomy',
    '/human-skills/creativity',
    '/human-skills/team-leading',
    '/technical-skills',
    '/career',
    '/about'
  ];

  public static isWip(route: string): boolean {
    return !environment.production || this.prodRoutes.includes(route);
  }
}
