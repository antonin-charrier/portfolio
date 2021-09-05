import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { WipService } from '../services/wip.service';

@Injectable({
  providedIn: 'root'
})
export class WipGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(_next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (WipService.isWip(state.url)) {
      this.router.navigate(['wip']);
      return false;
    }
    return true;
  }
}
