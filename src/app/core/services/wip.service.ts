import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WipService {
  private static prodRoutes: string[] = [
    '/projects/e-monthly',
    '/human-skills/autonomy'
  ];

  public static isWip(route: string): boolean {
    return this.prodRoutes.includes(route);
  }
 }
