import { Component } from '@angular/core';
import { RouteComponent } from 'src/app/shared/components/route/route.component';
import { ContactAnimations } from './contact.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: [
    './../../shared/components/route/route.component.scss',
    './contact.component.scss'
  ],
  animations: [ContactAnimations]
})
export class ContactComponent extends RouteComponent {
  public emailState = false;

  public animateEmail() {
    console.log('animateEmail');
    this.emailState = true;
    console.log('emailState', this.emailState);
    setTimeout(() => {
      this.emailState = false;
      console.log('emailState', this.emailState);
    }, 1000);
  }

  public logEvent(e: any) {
    console.log(e);
  }
}
