import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  public linkChange$ = new BehaviorSubject<number>(-1);
  public navItems : { link: string, text: string }[] = [
    { link: 'about', text: $localize`About` },
    { link: 'projects', text: $localize`Projects` },
    { link: 'hobbies', text: $localize`Hobbies` },
    { link: 'contact', text: $localize`Contact` },
  ];
}
