import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WipComponent } from './features/wip/wip.component';
import { HobbiesComponent } from './features/hobbies/hobbies.component';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wip', component: WipComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
