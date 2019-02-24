import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WipComponent } from './features/wip/wip.component';
import { HobbiesComponent } from './features/hobbies/hobbies.component';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'wip', component: WipComponent },
  { path: 'hobbies', redirectTo: 'wip', pathMatch: 'full' },
  { path: 'contact', redirectTo: 'wip', pathMatch: 'full' },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
