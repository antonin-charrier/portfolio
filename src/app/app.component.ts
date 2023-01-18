import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public links = [
    {
      img: 'malt',
      text: $localize`Malt`,
      href: 'https://www.malt.fr/profile/antonincharrier'
    },
    {
      img: 'linkedin',
      text: $localize`LinkedIn`,
      href: 'https://www.linkedin.com/in/antonin-charrier'
    },
    {
      img: 'github',
      text: $localize`GitHub`,
      href: 'https://github.com/antonin-charrier'
    },
    {
      img: 'email',
      text: $localize`Email me`,
      href: 'mailto:contact@antonin-charrier.com'
    }
  ];
  public linkHovered: string = 'none';

  public linkEnter(link: string) {
    this.linkHovered = link;
  }

  public linkLeave()  {
    this.linkHovered = 'none';
  }

  public isHovered(link: string) {
    return this.linkHovered === link;
  }

  public src(link: string) {
    if (link === 'none') {
      return '';
    }

    let fileName = '';

    if (this.isHovered(link)) {
      fileName = link + '_accent_100';
    } else {
      fileName = link + '_primary_contrast_500';
    }

    return `assets/icons/${fileName}.png`;
  }
}
