import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WipService {
  private static prodRoutes: string[] = [
    '/projects/e-monthly',
    '/human-skills/autonomy',
    '/contact'
  ];

  public static isWip(route: string): boolean {
    return !environment.production || this.prodRoutes.includes(route);
  }
 }
