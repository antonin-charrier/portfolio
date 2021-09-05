import { Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { timer } from 'rxjs';
import { ContactInfoComponent } from 'src/app/shared/dialogs/contact-info/contact-info.component';
import { ResumeComponent } from 'src/app/shared/dialogs/resume/resume.component';
import { DisplayService } from '../services/display.service';
import { ThemeService } from '../services/theme.service';

const ICON: string = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  width="510px" height="510px" viewBox="0 0 510 510" style="enable-background:new 0 0 510 510;" xml:space="preserve">
<g>
 <g id="post-linkedin">
   <path d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
      M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9
     S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204
     V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z"/>
 </g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private _isDarkTheme = false;
  private resumeDialogDimensions: { height: string, width: string} = { height: '80vh', width: '65vw' };
  private contactDialogDimensions: { height: string, width: string} = { height: '40vh', width: '45vw' };
  public isProjectsExpanded = false;
  public isTechnicalSkillsExpanded = false;
  public isHumanSkillsExpanded = false;
  public isOver = false;
  public parent = '';

  @Output()
  public sidenavToggled = new EventEmitter<boolean>();

  constructor(
    private matIconRegistry:MatIconRegistry,
    private domSanitizer:DomSanitizer,
    private translateService: TranslateService,
    private dialog: MatDialog,
    private themeService: ThemeService,
    private displayService: DisplayService,
    private router: Router
  ){
    this.generateIcons(['linkedin', 'github', 'moon', 'sun', 'route']);
  }

  get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }

  ngOnInit() {
    this._isDarkTheme = this.themeService.isDarkTheme.value;
    this.themeService.isDarkTheme.subscribe((value: boolean) => this._isDarkTheme = value);

    this.displayService.breakpoint.subscribe(newDisplay => {
      switch (newDisplay) {
        case Breakpoints.HandsetPortrait:
          this.resumeDialogDimensions = { height: '70vh', width: '100vw' };
          this.contactDialogDimensions = { height: '40vh', width: '100vw' };
          this.isOver = true;
          break;
        case Breakpoints.HandsetLandscape:
          this.resumeDialogDimensions = { height: '95vh', width: '100vw' };
          this.contactDialogDimensions = { height: '85vh', width: '100vw' };
          this.isOver = true;
          break;
        case Breakpoints.TabletPortrait:
          this.resumeDialogDimensions = { height: '80vh', width: '100vw' };
          this.contactDialogDimensions = { height: '40vh', width: '100vw' };
          this.isOver = true;
          break;
        case Breakpoints.TabletLandscape:
          this.resumeDialogDimensions = { height: '85vh', width: '65vw' };
          this.contactDialogDimensions = { height: '50vh', width: '60vw' };
          this.isOver = false;
          break;
        case Breakpoints.WebPortrait:
          this.resumeDialogDimensions = { height: '80vh', width: '65vw' };
          this.contactDialogDimensions = { height: '45vh', width: '65vw' };
          this.isOver = false;
          break;
        case Breakpoints.WebLandscape:
          this.resumeDialogDimensions = { height: '80vh', width: '50vw' };
          this.contactDialogDimensions = { height: '40vh', width: '45vw' };
          this.isOver = false;
          break;
      }
    });

    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd) {
        switch (value.urlAfterRedirects) {
          case '/projects/call-center':
          case '/projects/e-monthly':
          case '/projects/galt':
          case '/projects/vision-safety':
          case '/projects/web-agent':
            this.isProjectsExpanded = true;
            this.parent = 'projects';
            timer(100).subscribe(() => {
              let scrollList = document.getElementById('scroll-list');
              if (!scrollList) {
                return;
              }
              scrollList.scrollTop = 0
            });
            break;
          case '/technical-skills/android':
          case '/technical-skills/dot-net-core-web-api':
          case '/technical-skills/financial-assessments':
          case '/technical-skills/front-end':
          case '/technical-skills/notions-of-architecture':
            this.isTechnicalSkillsExpanded = true;
            this.parent = 'technical-skills';
            timer(100).subscribe(() => {
              let scrollList = document.getElementById('scroll-list');
              if (!scrollList) {
                return;
              }
              scrollList.scrollTop = this.isProjectsExpanded ? 220 : 20;
            });
            break;
          case '/human-skills/autonomy':
          case '/human-skills/creativity':
          case '/human-skills/knowledge-sharing':
          case '/human-skills/languages':
          case '/human-skills/team-leading':
            this.isHumanSkillsExpanded = true;
            this.parent = 'human-skills';
            timer(100).subscribe(() => {
              let scrollList = document.getElementById('scroll-list');
              if (!scrollList) {
                return;
              }
              scrollList.scrollTop = 450;
            });
            break;
          default:
            this.parent = '';
            break;
        }
      }
    });
  }

  get locale(): string {
    return this.translateService.currentLang.toLocaleUpperCase();
  }

  setLang(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }

  private generateIcon(name: string) {
    this.matIconRegistry.addSvgIcon(
      name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${name}.svg`)
    );
  }

  private generateIcons(names: string[]) {
    names.forEach(name => this.generateIcon(name));
  }

  email() {
    window.location.href = 'mailto:charrier.antonin@yahoo.fr';
  }

  linkedin() {
    switch (this.translateService.currentLang) {
      case 'fr':
        window.open('https://www.linkedin.com/in/antonin-charrier/?locale=fr_FR', '_blank');
        break;
      default:
        window.open('https://www.linkedin.com/in/antonin-charrier/?locale=en_US', '_blank');
        break;
    }
  }

  github() {
    window.open('https://github.com/antonin-charrier', '_blank');
  }

  resume() {
    this.dialog.open(ResumeComponent, {
      height: this.resumeDialogDimensions.height,
      width: this.resumeDialogDimensions.width
    });
  }

  contactInfo() {
    this.dialog.open(ContactInfoComponent, {
      height: this.contactDialogDimensions.height,
      width: this.contactDialogDimensions.width
    });
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.isDarkTheme.next(checked);
    localStorage.setItem('darkTheme', checked.toString());
  }

  toggleSidenav() {
    this.sidenavToggled.emit(true);
  }
}
